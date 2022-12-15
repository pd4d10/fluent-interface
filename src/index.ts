export default function fi<
  T extends Object,
  M extends Record<string, (t: T, ...args: any[]) => any>
>(t: T, methods: M) {
  const proto: Record<string, any> = {};
  Object.keys(methods).forEach((name) => {
    proto[name] = function (...args: any[]) {
      const next = methods[name](this as T, ...args);
      Object.setPrototypeOf(next, proto);
      return next;
    };
  });
  Object.setPrototypeOf(t, proto);

  return t as {
    [P in keyof M]: M[P] extends (t: any, ...args: infer V) => infer R
      ? (...args: V) => R
      : never;
  };
}
