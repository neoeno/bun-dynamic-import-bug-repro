var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// other.js
var exports_other = {};
__export(exports_other, {
  default: () => {
    {
      return other_default;
    }
  }
});

class MyInherited extends MyReassignedSuper {
}
var MyReassignedSuper, other_default;
var init_other = __esm(() => {
  MyReassignedSuper = class MySuper {
    greet() {
      return "Hello, world!";
    }
  };
  other_default = MyInherited;
});

// index.js
async function hi() {
  const { default: MyInherited2 } = await Promise.resolve().then(() => (init_other(), exports_other));
  const myInstance = new MyInherited2;
  console.log(myInstance.greet());
}
hi();
