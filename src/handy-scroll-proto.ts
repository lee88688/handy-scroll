import dom from './dom';

interface HandyScrollProtoHooks {
  beforeDestroy?: (instance: HandyScrollProto) => void;
  afterDestroy?: () => void;
}

class HandyScrollProto {
  container: HTMLElement
  widget!: HTMLDivElement
  scrollBody?: HTMLElement
  eventHandlers: { el: HTMLElement, handlers: { [key: string]: () => void } }[] = []
  visible: boolean
  skipSyncWidget: boolean
  skipSyncContainer: boolean
  hooks: HandyScrollProtoHooks

  constructor(container: HTMLElement, scrollBody?: HTMLElement) {
    // const instance = this;
    // let scrollBodies = dom.$$('.handy-scroll-body')
    //   .filter(node => node.contains(container));
    // if (scrollBodies.length) {
    //   instance.scrollBody = scrollBodies[0];
    // }
    this.container = container;
    this.scrollBody = scrollBody;
    this.visible = true;
    this.initWidget();
    this.update(); // recalculate scrollbar parameters and set its visibility
    this.addEventHandlers();
    // Set skipSync flags to their initial values (because update() above calls syncWidget())
    this.skipSyncContainer = this.skipSyncWidget = false;
    this.hooks = {};
  }

  initWidget(): void {
    // const instance = this;
    this.widget = dom.doc.createElement('div');
    const widget = this.widget;
    widget.classList.add('handy-scroll');
    const strut = dom.doc.createElement('div');
    strut.style.width = `${this.container.scrollWidth}px`;
    widget.appendChild(strut);
    this.container.appendChild(widget); // append scrollbar to container
  }

  addEventHandlers(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const instance = this;
    const eventHandlers = instance.eventHandlers = [
      {
        el: instance.scrollBody ?? (window as any),
        handlers: {
          scroll() {
            instance.checkVisibility();
          },
          resize() {
            instance.update();
          }
        }
      },
      {
        el: instance.widget,
        handlers: {
          scroll() {
            if (instance.visible && !instance.skipSyncContainer) {
              instance.syncContainer();
            }
            // Resume widget->container syncing after the widget scrolling has finished
            // (it might be temporally disabled by the container while syncing the widget)
            instance.skipSyncContainer = false;
          }
        }
      },
      {
        el: instance.container,
        handlers: {
          scroll() {
            if (!instance.skipSyncWidget) {
              instance.syncWidget();
            }
            // Resume container->widget syncing after the container scrolling has finished
            // (it might be temporally disabled by the widget while syncing the container)
            instance.skipSyncWidget = false;
          },
          focusin() {
            setTimeout(() => instance.syncWidget(), 0);
          }
        }
      }
    ];
    eventHandlers.forEach(({el, handlers}) => {
      Object.keys(handlers).forEach(event => el.addEventListener(event, (handlers as any)[event], false));
    });
  }

  checkVisibility(): void {
    // let instance = this;
    const {widget, container, scrollBody} = this;
    let mustHide = (widget.scrollWidth <= widget.offsetWidth);
    if (!mustHide) {
      const containerRect = container.getBoundingClientRect();
      const maxVisibleY = scrollBody ?
        scrollBody.getBoundingClientRect().bottom :
        window.innerHeight || dom.html.clientHeight;
      mustHide = ((containerRect.bottom <= maxVisibleY) || (containerRect.top > maxVisibleY));
      // console.log(`mustHide: ${mustHide}, bottom: ${containerRect.bottom}, maxVisibleY: ${maxVisibleY}, top: ${containerRect.top}`);
    }
    if (this.visible === mustHide) {
      this.visible = !mustHide;
      // We cannot simply hide the scrollbar since its scrollLeft property will not update in that case
      widget.classList.toggle('handy-scroll-hidden');
    }
  }

  syncContainer(): void {
    // const instance = this;
    const {scrollLeft} = this.widget;
    if (this.container.scrollLeft !== scrollLeft) {
      // Prevents container’s “scroll” event handler from syncing back again widget scroll position
      this.skipSyncWidget = true;
      // Note that this makes container’s “scroll” event handlers execute
      this.container.scrollLeft = scrollLeft;
    }
  }

  syncWidget(): void {
    // const instance = this;
    const {scrollLeft} = this.container;
    if (this.widget.scrollLeft !== scrollLeft) {
      // Prevents widget’s “scroll” event handler from syncing back again container scroll position
      this.skipSyncContainer = true;
      // Note that this makes widget’s “scroll” event handlers execute
      this.widget.scrollLeft = scrollLeft;
    }
  }

  // Recalculate scroll width and container boundaries
  update(): void {
    // const instance = this;
    const {widget, container, scrollBody} = this;
    const {clientWidth, scrollWidth} = container;
    widget.style.width = `${clientWidth}px`;
    // for fixed position left, right is auto by default
    // if (!scrollBody) {
    //   widget.style.left = `${container.getBoundingClientRect().left}px`;
    // }
    if (scrollBody) {
      const bottom = window.innerHeight - scrollBody.getBoundingClientRect().bottom;
      widget.style.bottom = `${bottom}px`;
    }
    if (widget.firstElementChild) {
      (widget.firstElementChild as HTMLElement).style.width = `${scrollWidth}px`;
    }
    // Fit widget height to the native scroll bar height if needed
    if (scrollWidth > clientWidth) {
      widget.style.height = `${widget.offsetHeight - widget.clientHeight + 1}px`; // +1px JIC
    }
    this.syncWidget();
    this.checkVisibility(); // fixes issue Amphiluke/floating-scroll#2
  }

  // Remove a scrollbar and all related event handlers
  destroy(): void {
    if (this.hooks.beforeDestroy) {
      this.hooks.beforeDestroy(this);
    }

    this.eventHandlers.forEach(({el, handlers}) => {
      Object.keys(handlers).forEach(event => el.removeEventListener(event, handlers[event], false));
    });
    this.widget?.parentNode?.removeChild(this.widget);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const instance: any = this;
    instance.eventHandlers = instance.widget = instance.container = instance.scrollBody = null;

    if (this.hooks.afterDestroy) {
      this.hooks.afterDestroy();
    }
  }
}

export default HandyScrollProto;
