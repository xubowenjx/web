<style scoped>
    @import 'index.less';
</style>
<template lang="html">
    <div class="index">
         
          <i-nav :active='0'>
        

            <Row     justify="center" class="code-row-bg1">
                <Col  >
                    <div class="center-image"></div>
                </Col>
            </Row>
            <Row    justify="center" class="code-row-bg1">
                <Col  >
                    <div class="image-groups">
                        <div class="image-group-title">
                                Keeping you in the know
                        </div>
                        <div class="image-group-column">
                            <Row>
                                <Col span="8" class="images"  >
                                    <div class="image-group first">
                                        <img src="../../assets/images/summer-cactus.jpg"/>

                                        <div class="image-desp">
                                                See detailed information about your energy use through My Account.
                                        </div>
                                    </div>
                                </Col>
                                <Col span="8"  class="images" >
                                    <div class="image-group">
                                        <img src="../../assets/images/summer-cactus.jpg"/>
                                        <div class="image-desp">
                                                See detailed information about your energy use through My Account.
                                        </div>
                                    </div>
                                </Col>
                                <Col span="8" class="images"  >
                                    <div class="image-group">
                                        <img src="../../assets/images/summer-cactus.jpg"/>
                                        <div class="image-desp">
                                            See detailed information about your energy use through My Account.
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row    justify="center" class="code-row-bg1">
                <Col  >
                        <div class="razer">
                                <div class="desp">
                                        <div class="desp-title">
                                            <strong>
                                                Stay Away
                                            </strong> Stay Alive
                                        </div>
                                        <div class="desp-conetnt">
                                            Downed power lines can look dead, yet still be deadly.
                                            Stay away from power lines and anything touching them.
                                            Call us to report power line hazards.
                                        </div>
                                        <div class="desp-btns">
                                                <Button>Read More</Button>
                                        </div>
                                </div>
                        </div>
                        <div style="height:50px;background-color:#fff;width:100%;">

                        </div>
                        
                </Col>
            </Row>
            </i-nav>
    </div>
</template>

<script>
    import iNav from '@/components/menu/Menu.vue'
    
    import axios from '@/libs/api'
    import api from '@/libs/interface'
    export default {
      components: {
        iNav
    
      },
      data () {
        return {
          data: []
        }
      },
      methods: {
        // axios 使用示例
        getData (callback) {
          // Util.ajax.get('/static/data.json').then(callback);
          axios.post(api.getNews).then(callback)
        }
      },
      mounted () {}
    }
</script>