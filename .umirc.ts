import { defineConfig } from 'umi';

const wrappers = ['@/wrappers/pageContainer'];

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {
  //   development: {
  //     output: './.mfsu-dev',
  //   },
  //   production: {
  //     output: './.mfsu-prod',
  //   },
  // },
  fastRefresh: {},
  layout: {
    name: 'WeiXiang Chen',
    locale: true,
    layout: 'mix',
    navTheme: 'dark',
    headerTheme: 'dark',
    splitMenus: true,
  },
  routes: [
    {
      wrappers,
      path: '/home',
      name: '首页',
      icon: 'windows',
      component: './index',
      exact: true,
    },
    {
      path: '/formily',
      name: 'Formily',
      icon: 'windows',
      routes: [
        {
          wrappers,
          path: '/formily/home',
          name: 'Hello World',
          icon: 'windows',
          component: './formily/helloworld',
          exact: true,
        },
        {
          wrappers,
          path: '/formily/login',
          name: '登录',
          icon: 'windows',
          component: './formily/login',
          exact: true,
        },
        {
          wrappers,
          path: '/formily/validate',
          name: '校验',
          icon: 'windows',
          component: './formily/validate',
          exact: true,
        },
        { redirect: '/formily/home' },
      ],
    },
    {
      path: '/interview',
      name: '面试',
      icon: 'windows',
      routes: [
        {
          wrappers,
          path: '/interview/home',
          name: '首页',
          icon: 'windows',
          component: './interview/home',
          exact: true,
        },
        {
          wrappers,
          path: '/interview/infinite-list',
          name: '无限列表',
          icon: 'windows',
          component: './interview/infiniteList',
          exact: true,
        },
        { redirect: '/interview/home' },
      ],
    },
    { redirect: '/home' },
  ],
});
