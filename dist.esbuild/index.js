(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // other.js
  var other_exports = {};
  __export(other_exports, {
    default: () => other_default
  });
  var MyReassignedSuper, MyInherited, other_default;
  var init_other = __esm({
    "other.js"() {
      MyReassignedSuper = class MySuper {
        greet() {
          return "Hello, world!";
        }
      };
      MyInherited = class extends MyReassignedSuper {
      };
      other_default = MyInherited;
    }
  });

  // index.js
  async function hi() {
    const { default: MyInherited2 } = await Promise.resolve().then(() => (init_other(), other_exports));
    const myInstance = new MyInherited2();
    console.log(myInstance.greet());
  }
  hi();
})();
