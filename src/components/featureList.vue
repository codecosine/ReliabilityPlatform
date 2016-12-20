<template lang="html">
  <div class="container app-main">
    <div class="col-lg-12"></div>
    <div class="col-lg-12">
          <table class="table table-list">
            <thead class="thead-default">
            <tr>
              <th v-for="item in nameList">{{item}}</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in featureList">
              <td>{{item}}</td>
              <td>
                <span class="btn btn-sm btn-primary">修改</span>
                <span class="btn btn-sm btn-danger">删除</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="form-group row">
          <h5 class="page-header">特征类型</h5>
          <div class="col-xs-10">
            <ul class="algorithm-select-list clearfix">
              <li v-for="item in features">
                <a class="algorithm-select-item" v-on:click="select(item.group)"
                   v-bind:class="{ 'algorithm-selected': selectedFeatures.indexOf(item.group)!== -1 }" >
                  {{item.group}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="form-group row">
          <div v-for="selected in selectedFeatures">
            <div v-for="feature in features">
              <label class="form-check-inline" v-if="feature.group === selected" v-for="item in feature.list">
                <input type="checkbox" class="form-check-input-lg">
                {{item.name}}
              </label>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featureList: ['个体特征', '集体特征'],
      nameList: ['特征'],
      selectedFeatures: [],
      features: [
        {
          group: '个人特征-用户商品对特征',
          list: [
            {
              url: '/',
              name: 'UI用户-商品点击数量',
            },
            {
              url: '/',
              name: 'UI用户-商品收藏数量',
            },
            {
              url: '/',
              name: 'UI用户-商品加入购物车数量',
            },
            {
              url: '/',
              name: 'UI用户-商品购买数量',
            },
          ],
        },
        {
          group: '个人特征-用户商品对转化率特征',
          list: [
            {
              url: '/',
              name: 'UI加入购物车-点击转化率',
            },
            {
              url: '/',
              name: 'UI加入购物车-收藏转化率',
            },
            {
              url: '/',
              name: 'UI购买-点击转化率',
            },
            {
              url: '/',
              name: 'UI购买-收藏转化率',
            },
          ],
        },
        {
          group: '集体特征-用户集体特征',
          list: [
            {
              url: '/',
              name: '用户对商品平均点击次数',
            },
            {
              url: '/',
              name: '用户平均操作天数内对商品点击次数',
            },
            {
              url: '/',
              name: '用户对商品其操作过的商品种类平均点击量',
            },
            {
              url: '/',
              name: '用户对商品加购物车的平均次数',
            },
            {
              url: '/',
              name: '用户平均操作天数内对商品加购物车次数',
            },
            {
              url: '/',
              name: '用户加购物车的商品平均种类数',
            },
            {
              url: '/',
              name: '用户平均购买商品次数',
            },
            {
              url: '/',
              name: '用户平均操作天数内对商品购买次数',
            },
            {
              url: '/',
              name: '用户平均购买商品的种类数',
            },
          ],
        },
      ],

    };
  },
  methods: {
    select(item) {
      if (this.selectedFeatures.indexOf(item) !== -1) {
        this.selectedFeatures.splice(this.selectedFeatures.indexOf(item), 1);
      } else {
        this.selectedFeatures.push(item);
      }
    },
  },
};
</script>

<style lang="css">
</style>
