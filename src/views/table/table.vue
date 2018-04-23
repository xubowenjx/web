<template>
  <i-nav :active='2' :breadcrumbs='breads'>
      <Table :columns="cols" :data="datas"></Table>
  </i-nav>
</template>
<script>
import iNav from '@/components/menu/Menu.vue'
export default {
  name: 'table',
  components: {
    iNav
  },
  data () {
    return {
      breads: [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Table'
        }
      ],
      cols: [
        {
          key: 'id',
          title: 'ID'
        },
        {
          key: 'name',
          title: '名称'
        },
        {
          key: 'Action',
          title: '操作',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'success'
                  },
                  on: {
                    click: () => {
                      this.show()
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      datas: [
        {
          id: '1',
          name: '1'
        },
        {
          id: '3',
          name: '3'
        },
        {
          id: '4',
          name: '4'
        },
        {
          id: '5',
          name: '5'
        },
        {
          id: '6',
          name: '6'
        },
        {
          id: '7',
          name: '7'
        }
      ]
    }
  },
  methods: {
    show () {
      this.$Message.info('This is a info tip')
    }
  }
}
</script>
