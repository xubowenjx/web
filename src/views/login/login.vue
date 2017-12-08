<style lang="less" scoped>
 @import 'login.less';
</style>
<style>
 .form  .ivu-form .ivu-form-item-label{
                color: #777;
                font-family: "Open Sans", Arial, sans-serif;
                font-size: 14px;
                line-height: 22px;
            }
       
</style>

<template lang="html">
 <div >
     <i-nav :active='1' :breadcrumbs='breads'>
           
        <div class="context-login">
          
          <Row >
            <Col span="10">
               <div class="context-login-left">
                   <div class="context-login-title">
                     NOT YET REGISTERED?
                    </div>  
                 <div class="context-login-subtitle">
                  Get yourself signed-up to My account and you'll be able to manage your account online for 7*24 hours.
               </div>  
               <div class="context-login-notices">
                  <ul>
                    <li><Icon type="checkmark-round" color="#BE2D2A"></Icon>
                    <div class="context-login-notices-text">View your account basic info</div>
                    </li>
                    <li><Icon type="checkmark-round" color="#BE2D2A"></Icon>
                     <div class="context-login-notices-text">Update your account basic info</div>
                    </li>
                    <li><Icon type="checkmark-round" color="#BE2D2A"></Icon>
                    <div class="context-login-notices-text">View your account balance info</div>
                    </li>
                    <li><Icon type="checkmark-round" color="#BE2D2A"></Icon>
                     <div class="context-login-notices-text">View your historical bills or vending info</div>
                    </li>
                    <li><Icon type="checkmark-round" color="#BE2D2A"></Icon>
                    <div class="context-login-notices-text">View your historical payments</div>
                    </li>
                     
                  </ul>
               </div>
               </div>
             </Card>
            </Col>
           <Col span="14" >
              <div class="context-login-right">
                  <div class="title">
                    Login to my space
                    <div class="subtitle">
                    It’s easy to stay comfortable
                    </div>
                  </div>
                   <div class="form">

                     <Form ref="formValidate"
                       label-position="top" 
                        :model="formValidate"
                         :rules="ruleValidate" >
                    <FormItem label="Username/Telephone Number" prop="name">
                      <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                    </FormItem>
                    <FormItem label="Your Password" prop="password">
                      <Input v-model="formValidate.password" type="password"  placeholder="请输入密码"></Input>
                    </FormItem>
                    <FormItem>
                      <Button type="error" @click="handleSubmit('formValidate')">{{$t('btn.submit')}}</Button>
                    </FormItem>
                  </Form>
                   </div>
                   
              </div>
           </Col> 
           
          </Row> 
          
        </div>
      </i-nav>
     
    </div>
  
</template>

<script>
  import iNav from '@/components/menu/Menu.vue'
  import copyRight from '@/components/copyright/CopyRight.vue'
  import axios from '@/libs/api'
  import api from '@/libs/interface'
  export default {
    data () {
      return {
        breads: [
          {
            text: 'Home',
            url: '/'
          },
          {
            text: 'Login'
          }
        ],
        formValidate: {
          name: '',
          password: ''
        },
        ruleValidate: {
          name: [
            {
              required: true,
              message: this.$t('login.noemptyname'),
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '密码不能为空',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    components: {
      iNav,
      copyRight
    },
    methods: {
      handleSubmit (name) {
        var that = this
        this.$refs[name].validate(valid => {
          if (valid) {
            // 后期直接整块封装
            axios
              .post(api.login, that.formValidate)
              .then(function (res) {
                var data = res.data
                if (data.code < 1) {
                  that.$Message.error(data.msg)
                } else {
                  that.$store.commit('login', data.token)
                  let redirect = decodeURIComponent(
                    that.$route.query.redirect || '/'
                  )
                  that.$router.push({
                    path: redirect
                  })
                }
              })
              .catch(function (error) {
                if (error.response) {
                  that.$Message.error('服务器内部错误')
                } else {
                  that.$Message.error('网络连接失败!')
                }
              })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>
