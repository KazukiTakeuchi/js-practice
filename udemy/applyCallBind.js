function greet() {
  let hi = `Hi, ${this.name}`;
  let slicedArray = [].slice.call(arguments);
  console.log(slicedArray);
  console.log(hi);
}

let obj = { name: "Tom" };

greet.call(obj, 1,2,3);
