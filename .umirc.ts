import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  layout: {
    name: 'WeiXiang Chen',
    locale: true,
    layout: 'side',
    navTheme: 'light',
  },
  routes: [
    { path: '/', name: '首页', icon: 'windows', component: './index' },
    { path: '/login', name: '登录', icon: 'windows', component: './login' },
  ],
});
