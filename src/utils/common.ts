export const throttle = (fn: () => void, delay: number = 0) => {
  let timer: number | undefined = undefined;

  // return的函数不能用箭头函数, this指向原因
  return function () {
    const context: any = this;
    const args = arguments;
    if (timer === undefined) {
      return;
    }
    timer = window.setTimeout(() => {
      fn.apply(context, [...args] as any);
      timer = undefined;
    }, delay);
  };
};
