import mockjs from 'mockjs';
import { v4 as uuidv4 } from 'uuid';

export default {
  'GET /api/interview/infiniteList': (req, res) => {
    res.end(
      JSON.stringify({
        code: 200,
        message: '请求成功',
        success: true,
        data: mockjs.mock({
          pageNumber: req.query.pageNumber,
          pageSize: req.query.pageSize,
          'list|10': [
            {
              name: '@city',
              'value|+1': mockjs.mock('@increment(100)'),
              'type|0-2': 1,
            },
          ],
        }),
      }),
    );
  },
};
