import mockjs from 'mockjs';

export default {
  'GET /api/interview/infiniteList': {
    code: 200,
    message: '请求成功',
    success: true,
    data: mockjs.mock({
      'list|10': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
    }),
  },
};
