const MyReassignedSuper = class MySuper {
  greet() {
    return 'Hello, world!';
  }
};

class MyInherited extends MyReassignedSuper {};

export default MyInherited;
