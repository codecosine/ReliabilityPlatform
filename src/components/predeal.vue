<template lang="html">
  <div class="container app-main">
    <div class="col-lg-12">
          <table class="table table-list">
            <thead class="thead-default">
            <tr>
              <th v-for="item in nameList">{{item}}</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in this.rawData">
              <td v-for="value in item">
                <span>{{ value }}</span>
              </td>
              <td>
                <span class="btn btn-sm btn-primary">修改</span>
                <span class="btn btn-sm btn-danger">删除</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
export default {
  computed: {
    rawData() {
      const array = [];
      for (let j = 0; j < 10; j += 1) {
        const item = [];
        for (let i = 0; i < 5; i += 1) {
          item.push(Math.random().toFixed(3));
        }
        array.push(item);
      }
      return array;
    },
  },
  data() {
    return {
      nameList: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5'],
    };
  },
};
</script>

<style lang="css">
</style>
