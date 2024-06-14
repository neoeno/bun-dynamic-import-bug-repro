async function hi() {
  const { default: MyInherited } = await import('./other.js');
  const myInstance = new MyInherited();
  console.log(myInstance.greet())
}

hi();
