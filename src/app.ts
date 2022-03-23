export const layout = () => {
  return {
    logout: () => alert('登出成功'),
  };
};

export async function getInitialState() {
  return new Promise((resolve) => {
    resolve({
      userId: '77',
      name: 'weixiangchen',
      avatar:
        'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    });
  });
}
