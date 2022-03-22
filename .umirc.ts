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
  },
});
