<template lang="html">
  <div class="container app-main">
    <div class="row">
      <div class="col-sm-3">
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
        </div>
      </div>

      <div class="col-sm-9">
        <form class="featuresForm">
          <div class="form-group">
            <h5 class="page-header">数据序列时间</h5>
          </div>
          <div class="form-group">
            <h5 class="page-header">数据预处理</h5>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              清除31天内无购买的用户
            </label>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              清除双十二数据
            </label>
          </div>
          <div class="form-group">
              <h5 class="page-header">详细参数配置</h5>
              <ul class="col-sm-12">
                <li><p class="text-muted">randomForest:对训练集的数据进行处理，生成决策树</p></li>
                <li><p class="text-muted">species~:代表需要预测的列,species是列的名称</p></li>
                <li><p class="text-muted">iris[ind==1]: 生成决策树的训练集</p></li>
                <li><p class="text-muted">ntree: 生成决策树的数目</p></li>
                <li><p class="text-muted">mtry: 选择的分裂属性的个数</p></li>
                <li><p class="text-muted">proximity= TRUE : 表示生成临近矩阵</p></li>
                <li><p class="text-muted">importance= TRUE : 表示输出分裂属性的重要性</p></li>
              </ul>
              <div class="col-sm-12">
                <label class="form-check-inline">
                  <input type="checkbox" class="form-check-input-lg">
                  randomForest
                </label>
                <label class="form-check-inline">
                  <input type="checkbox" class="form-check-input">
                  proximity
                </label>
                <label class="form-check-inline">
                  <input type="checkbox" class="form-check-input">
                  importance
                </label>
              </div>
              <div class="col-sm-3">
                <label class="h5" for="exampleSelect1">species</label>
                <select class="form-control" id="exampleSelect1">
                  <option>col01</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="col-sm-3">
                <label class="h5" for="exampleSelect1">iris</label>
                <input type="text" class="form-control" placeholder="iris">
              </div>
              <div class="col-sm-3">
                <label class="h5" for="exampleSelect1">mtry</label>
                <input type="text" class="form-control" placeholder="mtry">
              </div>
              <div class="col-sm-3">
                <label class="h5" for="exampleSelect1">ntree</label>
                <input type="text" class="form-control" placeholder="ntree">
              </div>

          </div>
          <div class="form-group">
            <h5 class="page-header">备注</h5>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="备注">
            </div><!-- /input-group -->
          </div>
          <div class="form-group">
            <button class="btn btn-primary">开始计算</button>
          </div>
        </form>


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
          group: '个人特征用户商品对特征',
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
