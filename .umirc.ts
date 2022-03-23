import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
    production: {
      output: './.mfsu-prod',
    },
  },
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
      path: '/',
      name: '首页',
      icon: 'windows',
      component: './index',
      exact: true,
    },
    {
      path: '/examples',
      name: '案例',
      icon: 'windows',
      routes: [
        {
          path: '/examples/home',
          name: '样例',
          icon: 'windows',
          component: './examples',
          exact: true,
        },
        {
          path: '/examples/login',
          name: '登录',
          icon: 'windows',
          component: './login',
          exact: true,
        },
        { redirect: '/examples/home' },
      ],
    },
  ],
});
