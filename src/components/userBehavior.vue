<template lang="html">
  <div class="container app-main">
    <div class="row">
      <div class="col-sm-3">
        <div class="list-group">
          <div class="docs-group" v-for="features in featureList">
            <a class="docs-group-link">{{ features.group }}</a>
              <ul class="docs-group-list">
                <li v-for="item in features.list">
                  <a @click="selectFeature(item.name)" v-bind:class="{ 'active': this.activeFeature == item.name }" href="">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
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
              <label class="col-sm-12" v-if="feature.group === selected" v-for="item in feature.list">
                <input type="checkbox" class="form-check-input-lg">
                {{item.name}}
              </label>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featureLists: ['个体特征', '集体特征'],
      nameList: ['特征'],
      selectedFeatures: [],
      features: [
        {
          group: '个体特征管理',
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
          group: '聚集特征管理',
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
      activeFeature: 'UI用户-商品收藏数量',
      featureList: [
        {
          group: '特征管理',
        },
        {
          group: '模型管理',
        },
      ],
    };
  },
  methods: {
    selectFeature(name) {
      this.activeFeature = name;
    },
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
  .docs-group {
    margin-top: 90px;
  }
  .featuresForm .form-group{
    margin-top : 10px;
    margin-bottom: 20px;
  }
  .docs-group-link {
    font-weight: 500;
    color: #373a3c;
  }
  .docs-group-list {
    display: block;
    margin-top: 30px;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .docs-group-list>li>a {
    display: block;
    padding: .55rem 0.75rem;
    font-size: 95%;
    color: #99979c;
  }
  .docs-group-list>li>a:hover {
    text-decoration: none;
  }
  .docs-group-list>li>.active {
    font-weight: 500;
    color: #373a3c;
    background-color: transparent;
  }
</style>
