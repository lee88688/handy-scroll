# handy-scroll

Handy dependency-free floating scrollbar widget. This is a fork of [handy-scroll](https://github.com/Amphiluke/handy-scroll) with several changes:
- refactor with Typescript
- custom scroll body at start
- support the scroll body's bottom is not the bottom of viewport

## Synopsis

handy-scroll is a dependency-free module which can be used to solve the problem of scrolling some lengthy containers horizontally when those containers don’t fit into the viewport. The widget is just a scrollbar which is attached at the bottom of the container’s visible area. It doesn’t get out of sight when the page is scrolled, thereby making horizontal scrolling of the container much handier.

:bulb: **Tips:**

* If you are rather looking for a jQuery plugin with the same functionality, please check out the sibling project [floating-scroll](https://github.com/Amphiluke/floating-scroll) instead.

## Usage

The widget requires the CSS file `handy-scroll.css` to be included on the page (you may also import it in your CSS/LESS files). The module script file `handy-scroll.umd.min.js` may be added on the web page either via a separate `<script>` element. if you use any AMD/CommonJS compatible module loader, use `handy-scroll.umd.min.js`.

:bulb: **Tip:** If you don’t care about supporting Internet Explorer, feel free to use the file `handy-scroll.es.min.js`, which is de facto the same as handy-scroll.min.js but is written in ES6, and is a bit smaller.

The handy-scroll package is available on npm, so you may add it to your project as usual:

```
npm install @monsterlee/handy-scroll
```

## Details & API

The module exports a single object `handyScroll` which provides the following methods:

* [`mount`](#mounting-the-widget) — initializes, “mounts” the widgets in the specified containers and initializes scroll body;
* [`mounted`](#checking-widget-existence) — checks if the widget is already mounted in the given container;
* [`update`](#updating-scrollbar) — updates the widget parameters and position;
* [`destroy`](#destroying-the-widget) — destroys the widgets mounted in the specified containers and removes all related event handlers.
* [`hooks`](#hooks) - hooks

### Mounting the widget

The only thing required to attach the widget to a static container (whose sizes will never change during the session) is a single call of the `handyScroll.mount()` method. The method expects two argument, the target containers reference which can be either an element or a selector, and the scroll body element which provides html element by default.
The method returns the instance of HandyScrollProto. The instance can be used for adding hooks and more accurate controls. 

```javascript
// mount widget in the specified container element
handyScroll.mount(document.getElementById("spacious-container"), '.scroll-body');

// mount widgets in all the container elements in the collection
handyScroll.mount(document.getElementsByClassName("spacious-container"), document.getElementById('scroll-body'));

// mount only one widget. if scroll body is not provide, default is html document element.
handyScroll.mount(".examples > .spacious-container");
```

### Checking widget existence

You may check if the widget is already mounted in the given container by calling the `handyScroll.mounted()` method.

```javascript
handyScroll.mount("#spacious-container");
console.log(handyScroll.mounted("#spacious-container")); // true
```

### Updating scrollbar

If you mount the widget in a container whose size and/or content may dynamically change, then you need a way to update the scrollbar each time the container’s sizes change. This can be done by invoking the method `handyScroll.update()` as in the example below.

```javascript
handyScroll.mount(".spacious-container");
// ... some actions which change the total scroll width of the container ...
handyScroll.update(".spacious-container");
```

The method expects a single argument, the target containers reference, which can be either an element, or a list of elements, or a selector.

### Destroying the widget

To unmount the widget and remove all related event handlers, use the method `handyScroll.destroy()` as follows:

```javascript
handyScroll.destroy(".spacious-container");
```

The method expects a single argument, the target containers reference, which can be either an element, or a list of elements, or a selector.

### hooks

```javascript
const instance = handyScroll.mount(".examples > .spacious-container");
instance.hooks.afterDestroy = () => {
  // ...
}
```

current hooks list below
- beforeDestroy, with instance as argument
- afterDestroy

### Special cases

If you want to attach the widget to a container living in a positioned box (e.g. a modal popup with `position: fixed`) then you need to apply two special indicating class names in the markup. The module detects these indicating class names (they are prefixed with `handy-scroll-`) and switches to a special functioning mode.

```html
<div class="handy-scroll-viewport"><!-- (1) -->
    <div class="handy-scroll-body"><!-- (2) -->
        <div class="spacious-container">
            <!-- Horizontally wide contents -->
        </div>
    </div>
</div>
```

The `.handy-scroll-viewport` element (1) is a positioned block (with any type of positioning except `static`) which serves for correct positioning of the widget. Note that this element itself should _not_ be scrollable. The `.handy-scroll-body` element (2) is a vertically scrollable block (with `overflow: auto`) which encloses the target container the widget is mounted in. After applying these special class names, you may initialise the widget as usual:

```javascript
handyScroll.mount(".spacious-container");
```

The [handy-scroll.css](dist/handy-scroll.css) file provides some basic styles for elements with classes `.handy-scroll-viewport` and `.handy-scroll-body`. Feel free to adjust their styles in your stylesheets as needed.

### “Unobtrusive” mode

You can make the widget more “unobtrusive” so that it will appear only when the mouse pointer hovers over the scrollable container. To do so just apply the class `handy-scroll-hoverable` to the desired scrollable container owning the widget.

## Live demos

Check out some usage demos [here](https://lee88688.github.io/handy-scroll/). The demo source code is in example folder.
