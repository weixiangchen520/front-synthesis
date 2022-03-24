import { defineConfig } from 'umi';

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
      wrappers: ['@/wrappers/pageContainer'],
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
          wrappers: ['@/wrappers/pageContainer'],
          path: '/formily/home',
          name: 'Hello World',
          icon: 'windows',
          component: './helloworld',
          exact: true,
        },
        {
          wrappers: ['@/wrappers/pageContainer'],
          path: '/formily/login',
          name: '登录',
          icon: 'windows',
          component: './login',
          exact: true,
        },
        { redirect: '/formily/home' },
      ],
    },
    { redirect: '/home' },
  ],
});
