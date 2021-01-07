<template>
  <div>
    <div ref="container" class="container">
      <el-button @click="count += 1">add number</el-button>
      <img src="@/assets/along-the-river.jpg" @load="imgLoad">
      <div>count: {{ count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return { count: 0 }
  },
  mounted () {
    window.handyScroll.mount(this.$refs.container)
  },
  methods: {
    imgLoad () {
      window.handyScroll.update(this.$refs.container)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  width: 500px;
  margin: auto;
  overflow-x: auto;
  margin-top: 120vh;
  margin-bottom: 40px;
}
</style>
