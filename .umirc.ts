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
        {
          wrappers,
          path: '/interview/ceiling',
          name: '滚动吸顶',
          icon: 'windows',
          component: './interview/ceiling',
          exact: true,
        },
        {
          wrappers,
          path: '/interview/virtualScroll',
          name: '虚拟滚动',
          icon: 'windows',
          component: './interview/virtualScroll',
          exact: true,
        },
        { redirect: '/interview/home' },
      ],
    },
    {
      path: '/design-mode',
      name: '设计模式',
      icon: 'Windows',
      routes: [
        {
          wrappers,
          path: '/design-mode/principle',
          name: '设计原理',
          icon: 'windows',
          component: './designMode/principle',
          exact: true,
        },
        { redirect: '/design-mode/principle' },
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
