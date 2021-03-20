let myObj = {
  id: 2,
  printId() {
    console.log(this.id);
  }
}

myObj.printId();


const outer = {
  func1: function() {
    console.log(this);

    const func2 = function () {
      console.log(this);

      const func3 = function () {
        console.log(this);
      }();
    }();
  }
}
outer.func1();
//入れ子になったthisはグローバルオブジェクトを指す

//すべてにouterオブジェクトを参照させたい場合は
const outer2 = {
  func1: function () {
    console.log(this);
    let _that = this

    const func2 = function () {
      console.log(_that);

      const func3 = function () {
        console.log(_that);
      }();
    }();
  }
}
outer2.func1();
