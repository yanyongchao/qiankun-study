import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: false,
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: 'one',
          name: 'one',
          component: '@/pages/one',
        },
        {
          path: '/two',
          name: 'two',
          component: '@/pages/two',
        },
      ],
    },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
