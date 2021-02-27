//Arrow Function 常に匿名関数　thisが静的に決定　コンストラクタ関数ではないのでnewできない　
// 関数の仮引数が1つのときは()を省略できる
// 関数の処理が1つの式である場合に、ブロックとreturn文を省略できる その式の評価結果をreturnの返り値とする
const 関数名 = () => {
  // 関数を呼び出したときの処理
  // ...
  return 関数の返す値;
};

// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる


//配列を２倍にして返す
const array = [1, 2, 3];
const doubleArray = array.map(function (value) {
  return value * 2;
});
console.log(doubleArray);
//Arrow Functionを使うと...
const doubleArrayArrow = array.map(value => value * 2);
console.log(doubleArrayArrow);






//コールバック関数= 引数として渡される関数、コールバック関数を引数として使う関数やメソッドは高階関数
/*function 高階関数（コールバック関数）{
  コールバック関数();
}
*/
const callBackArray = [1, 2, 3];
const output = (value) => {
  console.log(value);
}
callBackArray.forEach(output);
// 次のように実行しているのと同じ
// output(1); => 1
// output(2); => 2
// output(3); => 3

const arrayCallBack = [1, 2, 3];
arrayCallBack.forEach((value) => {
  console.log(value);
});


