import Vue from 'vue'
import handyScroll from '../../dist/handy-scroll'

const elTableHandyScroll = {
  bind (el, binding) {},
  inserted (el, binding) {
    const { arg } = binding
    console.log(arg)
    const container = el.querySelector('div.el-table__body-wrapper')
    setTimeout(() => {
      const instance = handyScroll.mount(container, `#${arg}`)
      const resizeFn = () => {
        console.log('resize')
        instance.update()
      }
      window.addEventListener('resize', resizeFn)
      instance.hooks.afterDestroy = () => {
        window.removeEventListener('resize', resizeFn)
      }
    }, 0)
  },
  unbind (el, binding) {
    const container = el.querySelector('div.el-table__body-wrapper')
    handyScroll.destroy(container)
  }
}

Vue.directive('el-table-hs', elTableHandyScroll)
