<template>
<div>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="订单中心" disabled>
          <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        </b-tab>
        <b-tab title="我的订单">
          <b-nav>
            <b-nav-item>全部订单</b-nav-item>
            <b-nav-item>待付款</b-nav-item>
            <b-nav-item>待发货</b-nav-item>
            <b-nav-item>已发货</b-nav-item>
            <b-nav-item>其他</b-nav-item>
          </b-nav>
        </b-tab>
        <b-tab title="我的回购单">
          <div>
            <b-nav>
              <b-nav-item>产品型号</b-nav-item>
              <b-nav-item>回购价格</b-nav-item>
              <b-nav-item>评估描述情况</b-nav-item>
              <b-nav-item>当前回购状态</b-nav-item>
              <b-nav-item>操作</b-nav-item>
            </b-nav>
          </div>
        </b-tab>
        <b-tab title="个人中心" disabled></b-tab>
        <b-tab title="地址管理">
          <div style="color: #666;font-size: 14px">
            <div style="margin-bottom: 40px">
              <span class="title">新增收获地址</span>
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="收获人姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                  <el-form-item label="收获人手机号" prop="telphone">
                    <el-input v-model="ruleForm.telphone"></el-input>
                  </el-form-item>
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-form-item label="收获人地址" prop="address">
                      <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                </el-form-item>
              </el-form>
              </el-form>
              </el-form>
            </div>
            <div style="margin-bottom: 40px">
              <span class="title">已有收获地址</span>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="收获人姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="收获人地址"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="phone"
                  label="收获人手机号">
                </el-table-column>
                <el-table-column
                  prop="action"
                  label="操作">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </b-tab>
        <b-tab title="我的收藏">
          我的收藏
        </b-tab>
        <b-tab title="消息提醒">
          消息提醒
        </b-tab>
        <b-tab title="建议反馈">
         建议反馈
        </b-tab>
        <b-tab title="资产中心" disabled></b-tab>
        <b-tab title="我的优惠券">
          我的优惠券
        </b-tab>
        <b-tab title="我的红包">
          我的红包
        </b-tab>
        <b-tab title="我的回购金">
          我的回购金
        </b-tab>
        <b-tab title="服务中心" disabled></b-tab>
        <b-tab title="退款/退货跟踪">
         退款/退货跟踪
        </b-tab>
        <b-tab title="以旧换新" class="desc">
          <a>以旧换新</a>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    data() {
      return {
        name: '落幕晟傷',
        token:123456,
        activityList:[
          {
            id:1,
            url:"https://fms.res.meizu.com/dms/2018/07/13/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png",
            content:"全场顺丰包邮"
          },
          {
            id:2,
            url:"https://fms.res.meizu.com/dms/2018/07/13/d28eac8b-b915-49dc-9dbd-80884a07d44f.png",
            content:"100+ 城市次日送达"
          },
          {
            id:3,
            url:"https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png",
            content:"7天无理由退货"
          },
          {
            id:4,
            url:"https://fms.res.meizu.com/dms/2018/07/13/1998f0da-a439-4e07-9736-e6a1c39fb0ae.png",
            content:"15天换货保障"
          },
          {
            id:5,
            url:"https://fms.res.meizu.com/dms/2018/07/13/420825c1-4763-436d-b3e1-721651ccc70c.png",
            content:"1年免费保修"
          },
          {
            id:6,
            url:"https://fms.res.meizu.com/dms/2018/07/13/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png",
            content:"上门快修"
          }
        ],
        tableData:[
          {
            name:"黄晟",
            address:"江苏省南京市栖霞区仙林街道仙林大学城羊山北路1号南京工业职业技术学院",
            phone:"18252039597",
            action:"修改 删除"
          },
          {
            name:"黄晟",
            address:"江苏省常州市溧阳市上黄镇桥北村45号",
            phone:"18252039597",
            action:"修改 删除"
          }
        ],
        ruleForm: {
          name: '',
          telphone:'',
          region: '',
        },
        rules: {
          name: [
            { required: true, message: '必填', trigger: 'blur' },
            { min: 2, max: 3, message: '长度在 2 到 3 个字符', trigger: 'blur' }
          ],
          telphone:[
            { required: true, message: '必填', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
          ],
          address:[
            { required: true, message: '必填', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
        }
      }
    },
    computed: {
      username() {
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
      }
    },
    methods: {
      // 用户名下拉菜单选择事件
      handleCommand(command) {
        if (command == 'loginout') {
          localStorage.removeItem('ms_username')
          this.$router.push('/login');
        }
      },
      logout() {
        localStorage.removeItem('loginUser')
        this.$router.go(0);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .title{
    line-height: 38px;
    padding-left: 25px;
    margin: 10px 0 20px;
    font-size: 18px;
    font-weight: 700;
  }
  .desc{
    padding-top: 332px;
    text-align: center;
  }
  .footer-hr{
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
  }
  .online-btn{
    height: 30px;
    padding: 0 16px;
    overflow: hidden;
    position: relative;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 20px;
    margin-top: 3px;
    display: inline-block;
    font-size: 14px;
    background: #0bbbef;
  }
  .tel{
    color: #00c3f5;
    font-size: 25px;
    font-weight: 400;
    margin-top: -6px;
    line-height: 40px;
  }
  .footer-wrap{
    max-width: 1240px;
    margin: 0 auto;
  }
  .footer-service {
    width: 1000px;
    float: left;
  }
</style>
