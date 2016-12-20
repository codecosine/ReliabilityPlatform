<template lang="html">
  <div class="container app-main">
    <div class="row">
      <div class="col-sm-2">
        <div class="list-group">
          <div v-for="features in featureList">
            <a class="docs-group-link">{{ features.group }}</a>
              <ul class="docs-group-list">
                <li v-for="item in features.list">
                  <a @click="selectFeature(item.name)" v-bind:class="{ 'active': this.activeFeature == item.name }" href="">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
          </div>
          <button class="btn btn-primary">添加模型</button>
        </div>
      </div>
      <div class="col-sm-10">
        <div v-for="features in featureList">
          <h2>{{ features.group }}</h2>
          <div v-for="item in features.list">
            <a href="#item.name" data-scroll>
              <h2 id="item.name">
                <a href="#item.name" class="headerlink" title="item.name"></a>
                {{item.name}}
              </h2>
            </a>
            <a href="#">编辑</a>
            <p>{{item.introduction}}</p>
          </div>
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
      activeFeature: 'UI用户-商品收藏数量',
      featureList: [
        {
          group: '模型',
          list: [
            {
              name: 'IRE方法',
              arg: {},
              introduction: '利用AUC值计算权重，并用DS算法合成结果',
            },
            {
              name: 'CRE方法',
              introduction: '利用AUC值计算初始权重，用遗传算法获得最佳权重，并用DS算法合成结果',
            },
            {
              name: 'IIRE方法',
              introduction: '利用AUC值计算两个焦元的权重，并用DS算法合成结果',
            },
            {
              name: 'ICRE方法',
              introduction: '利用AUC值计算两个焦元的初始权重，用遗传算法获得最佳权重，并用DS算法合成结果',
            },
            {
              name: 'IIRE3方法',
              introduction: '利用AUC值计算三个焦元的权重，并用DS算法合成结果',
            },
            {
              name: 'ICRE方法',
              introduction: '利用AUC值计算三个焦元的初始权重，用遗传算法获得最佳权重，并用DS算法合成结果',
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectFeature(name) {
      this.activeFeature = name;
    },
  },
};
</script>

<style lang="css">
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
