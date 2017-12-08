<style lang="less" scoped>
  @import 'Menu.less';
</style>
<template>
<div id="header">
  <Row justify="center" class="code-row-bg">
    <Col span="18" offset="3">
    <div class="header">
      <Row class="header-row" align="bottom">
      <Col>
        <div id="tool" style="display:block;height:50px;">
            <nav class="nav-top">
              <ul class="nav-items">
                <li class="li-items">
                  <a v-if="!logined" @click="login">
                    <Icon type="ios-arrow-right" />Sign in</a>
                    <a v-if="logined" @click="logout">
                    <Icon type="ios-arrow-right" />Logout</a>
                </li>
                <li class="li-items">
                  <a>
                    <Icon type="ios-arrow-right" />Register</a>
                </li>
                <li>
                  <a>
                    <Icon type="ios-telephone" />(123) 456-789</a>
                </li>
              </ul>
            </nav>
          </div>
      </Col>        
      </Row>
       <Affix>
      <Row class="header-row" align="bottom">

        <Col  class="header-col" >
        <div class="logo"></div> 
        
        <div class="nav-bottom" >
          
          <nav class="nav-menu">
            <ul class="nav-menu-ul">
              <li class="nav-menu-ul-li first" :class="active==0?'active':''">
                <router-link :to="'/'">{{ $t('index.home') }}</router-link>
              </li>
              <li class="nav-menu-ul-li" :class="active==1?'active':''">
                <a href="#">MY SPACE<Icon type="arrow-down-b"></Icon></a>

                <ul class="chid-nav">
                  <li>
                    <div class="">
                      <a>菜单1<Icon type="arrow-right-b" class="pull-right"></Icon></a>
                      <ul class="third-nav">
                      <li>
                        <router-link :to="'/about'">{{ $t('index.about') }}</router-link>
                      </li>
                      <li>
                        <router-link :to="'/myspace/infos'">个人信息</router-link>
                      </li>
                      <li><a>菜单5</a></li>
                    </ul>
                    </div>
                  </li>
                  <li>
                    <div class="">
                      <router-link :to="'/about'">{{ $t('index.about') }}<Icon type="arrow-right-b" class="pull-right"></Icon></router-link>
                      <ul class="third-nav">
                      <li>
                        <router-link :to="'/about'">{{ $t('index.about') }}</router-link>
                      </li>
                      <li>
                        <router-link :to="'/myspace/infos'">个人信息</router-link>
                      </li>
                      <li><a>菜单5</a></li>
                    </ul>
                    </div>
                  </li>
                </ul>



              </li>
              <li class="nav-menu-ul-li" :class="active==2?'active':''">
                <a href="#">Service Guid<Icon type="arrow-down-b"></Icon></a>

                <ul class="chid-nav">
                  <li>菜单1</li>
                  <li>菜单2</li>
                </ul>


              </li>
              <li class="nav-menu-ul-li last" :class="active==3?'active':''">
                <a>JOIN US</a>
              </li>
              <li class="nav-menu-ul-share">
                <span class="share">
                                    <Icon type="social-facebook"></Icon>
                                </span>
              </li>
              <li class="nav-menu-ul-share">
                <span class="share">
                                    <Icon type="social-twitter"></Icon>
                                </span>
              </li>
              <li class="nav-menu-ul-share">
                <span class="share">
                                    <Icon type="social-googleplus"></Icon>
                                </span>
              </li>
            </ul>
          </nav>
          
        </div>
        
        </Col>
      </Row>
       </Affix>
       <Row>
      <Col>
        <Broc v-if="breadcrumbs" :items="breadcrumbs"></Broc>  
      </Col>         
       </Row>
       <Row>
         <Col>
          <slot></slot>
         </Col>
       </Row>
       <Row>
         <Col>
         <copy-right></copy-right>
         </Col>
       </Row>
        
    </div>
    </Col>
  </Row>

</div>
</template>

<script>
// import $ from 'jquery'
// import Velocity from 'velocity-animate'
import axios from '@/libs/api'
import api from '@/libs/interface'
import Broc from '@/components/broc/broc.vue'
import copyRight from '@/components/copyright/CopyRight.vue'
export default {
  props: {
    active: {
      type: Number
    },
    'breadcrumbs': {
      type: Array
    }
  },
  data () {
    return {
      logined: !!this.$store.getters.getToken
    }
  },
  mounted () {

  },
  computed: {

  },
  components: {
    Broc,
    copyRight
  },
  methods: {
    changeLogo () {

    },
    clearToken () {
      this.$store.commit('logout', '')
      this.logined = !!this.$store.getters.getToken
    },
    login () {
      this.$router.push({
        path: '/login',
        query: {
          redirect: '/'
        }
      })
    },
    logout () {
      var that = this
      let config = {
        content: '确定退出吗?',
        onOk () {
          axios.post(api.logout, {token: that.$store.getters.getToken}).then(function (res) {
            that.clearToken()
            that.$router.push({
              path: '/'
            })
          })
        },
        onCancel () {

        }
      }
      this.$Modal.confirm(config)
    }
  }
}
</script>
