<template>
  <div class="layout">
    <div class="sidebar"></div>
    <div class="page">
      <div class="header">header</div>
      <div class="content">
        <div ref="container1" class="container">
          <img src="@/assets/along-the-river.jpg" @load="imgLoad">
        </div>
        <div ref="container2" class="container">
          <img src="@/assets/along-the-river.jpg" @load="imgLoad">
        </div>
      </div>
      <div class="footer">footer</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePageWithMultiScroll',
  mounted () {
    window.handyScroll.mount(this.$refs.container1, '.content')
    window.handyScroll.mount(this.$refs.container2, '.content')
  },
  methods: {
    imgLoad () {
      console.log('loaded image')
      window.handyScroll.update(this.$refs.container1)
      window.handyScroll.update(this.$refs.container2)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
//max-width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

.sidebar {
  width: 100px;
  flex-grow: 0;
  flex-shrink: 0;
  background: lightblue;
}

.page {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;

.header {
  flex-grow: 0;
  flex-shrink: 0;
  height: 50px;
  background: teal;
  text-align: center;
  color: azure;
}

.content {
  overflow: auto;
  flex-grow: 1;
  flex-shrink: 1;

.container {
  width: 500px;
  margin: 700px auto;
  overflow-x: auto;
}
}

.footer {
  flex-shrink: 0;
  flex-grow: 0;
  height: 50px;
  background: greenyellow;
  text-align: center;
}
}
}
</style>
