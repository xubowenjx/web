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
       <Affix @on-change="change">
      <Row class="header-row" align="bottom">

        <Col  class="header-col" >
        <div class="nav-bottom" >
          <img src="../../assets/images/logo.png" class="bounce" :class="{active:status}">
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
                  <li><router-link :to="'/table'">表格测试</router-link></li>
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
                <span class="share" @click="sharsina">
                                    <Icon type="social-googleplus"></Icon>
                                </span>
              </li>
              <li class="nav-menu-ul-share">
                <span class="share" @click="changelang">
                                    {{language === 'zh' ? 'en' : 'zh'}}
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
      logined: !!this.$store.getters.getToken,
      status: false,
      language: ''
    }
  },
  mounted () {
    let sr = window.localStorage.getItem('language') || window.navigator.language || navigator.browserLanguage
    this.language = sr.split('-')[0]
  },
  computed: {

  },
  components: {
    Broc,
    copyRight
  },
  methods: {
    changelang () {
      this.language = this.language === 'zh' ? 'en' : 'zh'
      window.localStorage.setItem('language', this.language)

      this.$i18n.locale = this.language
    },
    changeLogo () {

    },
    sharsina () {
      let top = window.screen.height / 2 - 350
      let left = window.screen.width / 2 - 200
      let title = 'say something?'
      let rLink = window.location.href
      console.log(rLink)
      // let backUrl = 'http://wx.hengfu100.com//memberc_friend'
      // let site = desc_
      // let pic = 'http://www.junlenet.com/uploads/allimg/150510/1-150510104044.jpg'
      window.open('http://service.weibo.com/share/share.php?&title=' +
       // pic=' + encodeURIComponent(pic) +
        encodeURIComponent(title.replace(/ /g, ' ').replace(/<br \/>/g, ' ')) +
         '&url=' + encodeURIComponent(rLink),
        'share to sina weibo',
        'height=550,width=1000,top=' + top + ',left=' + left + ',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')
    },
    change (a) {
      this.status = a
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
