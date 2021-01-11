<template>
  <div class="layout">
    <div class="sidebar"></div>
    <div class="page">
      <div class="header">header</div>
      <div class="content" id="content">
        <el-switch v-model="show" style="display: block; margin-bottom: 20px;" />
        <el-card v-if="show">
          <el-table v-el-table-hs:content :data="tableData">
            <el-table-column type="selection"/>
            <el-table-column type="index" label="#" fixed="left"/>
            <el-table-column prop="number" label="number" fixed="left"/>
            <el-table-column prop="name" label="name"/>
            <el-table-column prop="test1" label="test1"/>
            <el-table-column prop="test2" label="test2"/>
            <el-table-column prop="test3" label="test3"/>
            <el-table-column prop="test4" label="test4"/>
            <el-table-column prop="test4" label="test4"/>
            <el-table-column prop="test4" label="test4"/>
            <el-table-column prop="title" label="title"/>
            <el-table-column prop="title" width="200px" label="title"/>
            <el-table-column prop="title" width="200px" label="title"/>
            <el-table-column prop="title" width="200px" label="title"/>
            <el-table-column prop="test4" label="test4" fixed="right" />
          </el-table>
        </el-card>
        <el-card style="margin-top: 100px;">
          <el-table v-el-table-hs:content :data="tableData">
            <el-table-column type="selection"/>
            <el-table-column type="index" label="#"/>
            <el-table-column prop="number" label="number"/>
            <el-table-column prop="name" label="name"/>
            <el-table-column prop="test1" label="test1"/>
            <el-table-column prop="test2" label="test2"/>
            <el-table-column prop="test3" label="test3"/>
            <el-table-column prop="test4" label="test4"/>
            <el-table-column prop="test4" label="test4"/>
            <el-table-column prop="test4" label="test4"/>
            <el-table-column prop="title" label="title"/>
            <el-table-column prop="title" width="200px" label="title"/>
            <el-table-column prop="title" width="200px" label="title"/>
            <el-table-column prop="title" width="200px" label="title"/>
            <el-table-column prop="test4" label="test4" />
          </el-table>
        </el-card>
      </div>
      <div class="footer">footer</div>
    </div>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  name: 'SinglePageWithComplicatedCase',
  data () {
    const tableData = Mock.mock({
      'tableData|10': [{
        number: '@natural(10, 100)',
        name: '@word',
        test1: '@word',
        test2: '@word',
        test3: '@word',
        test4: '@word',
        title: '@title'
      }]
    })
    return {
      ...tableData,
      show: true
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
      padding: 20px;

      .container {
        width: 500px;
        margin: 700px auto;
        overflow-x: auto;
      }
    }

    .footer {
      flex-shrink: 0;
      flex-grow: 0;
      height: 10vh;
      background: greenyellow;
      text-align: center;
    }
  }
}
</style>
