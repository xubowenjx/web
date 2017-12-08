<style lang="less" scoped>
    @import 'broc.less';
</style>
<style>
    .Breadcrumb-items a.ivu-breadcrumb-item-link {
      color: #BE2D2A;
    }
    .Breadcrumb-items span.ivu-breadcrumb-item-link {
      color:#777;
    }
    .Breadcrumb-items  .ivu-breadcrumb-item-separator{
        color:#777;
    }
    
</style>

<template>
  <div class="index">
     <div class="Breadcrumb-items">
        <Breadcrumb separator=">">
            <BreadcrumbItem :to="item.url" :key="index" v-for="(item,index) in breaditems">
                {{item.text}}
            </BreadcrumbItem>
         </Breadcrumb>
     </div>
    <h1 class="Breadcrumb-desp">
        {{breaditems[breaditems.length-1].text}}
    </h1>
  </div>
</template>
<script>
    export default {
      name: 'broc',
      props: {
        items: Array
      },
      data () {
        return {
          breaditems: this.items
        }
      }
    }
</script>
