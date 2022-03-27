import request from 'umi-request';
import { message } from 'antd';

const requestWrapper = (
  url: string,
  payload: any = {},
  method: string = 'get',
) => {
  return request(url, {
    prefix: '/api',
    method,
    params: method === 'get' ? payload : undefined,
    data: method !== 'get' ? payload : undefined,
  })
    .then((res) => {
      if (res.code === 200) {
        return res.data;
      } else {
        return message.error(res.message);
      }
    })
    .catch((err) => {
      return message.error(err.message);
    });
};

export default requestWrapper;
