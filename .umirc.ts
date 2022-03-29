import { defineConfig } from 'umi';

const wrappers = ['@/wrappers/pageContainer'];

const pluginConfig = {
  layout: {
    name: 'WeiXiang Chen',
    locale: true,
    layout: 'mix',
    navTheme: 'dark',
    headerTheme: 'dark',
    splitMenus: true,
  },
  dva: {
    hmr: true,
  },
};

const routeConfig = {
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
        {
          wrappers,
          path: '/formily/step-form',
          name: '分步表单',
          icon: 'windows',
          component: './formily/stepForm',
          exact: true,
        },
        {
          wrappers,
          path: '/formily/tab-form',
          name: '选项卡表单',
          icon: 'windows',
          component: './formily/tabForm',
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
        {
          wrappers,
          path: '/interview/infinite-list-insection',
          name: '无限列表(InsectionObserver)',
          icon: 'windows',
          component: './interview/infiniteListByInsection',
          exact: true,
        },
        { redirect: '/interview/home' },
      ],
    },
    { redirect: '/home' },
  ],
};

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mock: {},
  ...pluginConfig,
  ...routeConfig,
});
