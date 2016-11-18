<template>
  <div>
    <div class="container">
      <h3>任务列表</h3>
      <div class="loading" v-if="loading">
        <div class="text-xs-center" >加载列表中......
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <button type="button" class="btn btn-primary"  v-on:click="$router.push('/addTask')">+ 新建任务</button>
        </div>
        <div class="col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="输入算法名/操作时间进行搜索...">
            </div>
          </div>
        <div class="col-lg-12">
          <table class="table table-list">
            <thead class="thead-default">
            <tr>
              <th>#</th>
              <th>备注</th>
              <th>算法</th>
              <th>状态</th>
              <th>操作时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items">
              <th scope="row">{{ index+1 }}</th>
              <td>
                <span>{{ item.remark }}</span>
              </td>
              <td>
                <span class="text-primary" >{{ item.algoName }}</span>
              </td>
              <td>
                <div>
                  <span v-bind:class="statusClassObject(item.status)" >{{ item.status | formatStatus }}</span>
                </div>
              </td>
              <td>
                <div class="ip-cell">
                  <p><span class="text-overflow m-width">上传时间:{{ item.subTime | formatDate }}</span></p>
                  <p><span class="text-overflow m-width">完成时间:{{ item.finTime | formatDate }}</span></p>
                </div>
              </td>
              <td>
                <div class="operate-cell">
                  <a href="">查看</a>
                  <a :href="item.resultFile">下载</a>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-12">
          <div class="list-split">
            <div class="list-state">
              <span class="tc-15-page-text"><!--if start-->共<strong>0</strong>条记录，当前页有<strong>1</strong>条</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint no-param-reassign: ["error", { "props": false }] */
  /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
  export default{
    filters: {
      formatDate(time) {
        if (!time) {
          return '无';
        }
        const date = new Date(time);
        const o = {
          month: date.getMonth() + 1,
          day: date.getDate(),
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds(),
          years: date.getFullYear(),
        };
        return `${o.years}-${o.month}-${o.day} ${o.hours}:${o.minutes}:${o.seconds}`;
      },
      formatStatus(status) {
        if (status === 0) {
          return '计算中';
        }
        if (status === 1) {
          return '计算完成';
        }
        if (status === 2) {
          return '计算错误';
        }
        return '错误';
      },
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      $route: 'fetchData',
    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    data() {
      return {
        loading: false,
        error: null,
        items: [
          {
            id: '6c6824f5-284a-40d1-98a4-893a784c1b0a',
            resultFile: 'xls/6c6824f5-284a-40d1-98a4-893a784c1b0a.xls',
            dataFile: 'xls/a62849ce-7cbe-47ea-9438-32798814b5c4.xls',
            remark: '',
            algoName: 'CRE',
            subTime: null,
            finTime: 1479373843000,
            status: 0,
          },
          {
            id: '6c6824f5-284a-40d1-98a4-893a784c1b0a',
            resultFile: 'xls/6c6824f5-284a-40d1-98a4-893a784c1b0a.xls',
            dataFile: 'xls/a62849ce-7cbe-47ea-9438-32798814b5c4.xls',
            remark: '我就问你有没有影响',
            algoName: 'CRE',
            subTime: 1479373843000,
            finTime: 1479373843000,
            status: 1,
          },
          {
            id: '6c6824f5-284a-40d1-98a4-893a784c1b0a',
            resultFile: 'xls/6c6824f5-284a-40d1-98a4-893a784c1b0a.xls',
            dataFile: 'xls/a62849ce-7cbe-47ea-9438-32798814b5c4.xls',
            remark: '计算中测试',
            algoName: 'CRE',
            subTime: 1479373843000,
            finTime: 1479373843000,
            status: 2,
          },
        ],
      };
    },
    methods: {
      statusClassObject(status) {
        if (status === 1) {
          return { 'text-success': true };
        }
        if (status === 2) {
          return { 'text-danger': true };
        }
        return { 'text-primary': true };
      },
      fetchData() {
        this.error = this.post = null;
        this.loading = true;
        this.$http.post('/taskList/top', {
          fileName: this.fileName,
          algoName: this.algorithm,
          remark: this.remark,
        })
          .then((res) => {
            this.loading = false;
            this.items = res.body;
          }, (err) => {
            this.error = err.toString();
          });
      },
    },
  };
</script>
<style>
  .table-list thead tr th{
    font-size: 14px;
  }
  .table-list tbody tr th{
    font-size: 14px;
  }
  .ip-cell p{
    line-height: 10px;
    font-size: 12px;
  }
  .operate-cell a{
    font-size: 14px;
    padding-top: 1px;
    padding-right: 2px;
    display: inline-block;
    vertical-align: middle;
    color: #2277da;
    text-decoration: none;
  }
  .list-split {
    position: absolute;
    left: 20px;
    right: 20px;
    margin: 0;
    padding: 10px 0;
    border-top: 1px solid #BEC0C3;
    z-index: 3;
  }
  .list-split .list-state {
    float: left;
    color: #a2a2a2;
  }
  .list-split .list-state span {
    font-size: 14px;
    margin-right: 10px;
  }
</style>
