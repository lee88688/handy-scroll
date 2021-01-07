import Vue from 'vue'
import handyScroll from '../../dist/handy-scroll'

const elTableHandyScroll = {
  bind (el, binding) {},
  inserted (el, binding) {
    const { arg } = binding
    console.log(arg)
    const container = el.querySelector('div.el-table__body-wrapper')
    setTimeout(() => {
      handyScroll.mount(container, `#${arg}`)
    }, 0)
  },
  unbind (el, binding) {
    const container = el.querySelector('div.el-table__body-wrapper')
    handyScroll.destroy(container)
  }
}

Vue.directive('el-table-hs', elTableHandyScroll)
