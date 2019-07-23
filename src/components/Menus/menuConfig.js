
const menus = [
  {
    icon: 'pie-chart',
    title: '首页',
    path: '/app'
  },
  {
    icon: 'desktop',
    title: '登录测试页',
    path: '/app/test'
  },
  {
    icon: 'table',
    title: '表格',
    SubMenu: [
      {
        icon: 'table',
        path: '/app/tables/table1',
        title: '基础表格'
      },
      {
        icon: 'table',
        path: '/app/tables/dragTable',
        title: '拖拽表格'
      }
    ]
  },
  {
    icon: 'compass',
    title: '组件',
    SubMenu: [
      {
        icon: 'loading-3-quarters',
        path: '/app/components/loadingBar',
        title: 'LoadingBar'
      }
    ]
  },
  {
    icon: 'desktop',
    title: 'css模块化',
    path: '/app/cssModules'
  },
]

export default menus
