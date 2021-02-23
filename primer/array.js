// 配列とは値に順序をつけて格納できるオブジェクト。 配列に格納したそれぞれの値のことを要素、それぞれの要素の位置のことをインデックス
// JavaScriptにおける配列は可変長。 そのため配列を作成後に配列へ要素を追加したり、配列から要素を削除可能

// 2次元配列（配列の配列）
const matrix = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"]
];
console.log(matrix[0][0]); //aを取り出す
console.log(matrix[matrix.length - 1]);  //e,fを取り出す
console.log(matrix[matrix.length - 1][1]);  //fを取り出す

//オブジェクトが配列かどうかを判定する Array.isArrayメソッド　typeofでは結果としてobjectが返される
const obj = {};
const array = [];
console.log(Array.isArray(obj)); // => false
console.log(Array.isArray(array)); // => true


//分割代入可能
const numbers = ["one", "two", "three"];
const [first, second, third] = numbers;
console.log(first);
console.log(third)

//配列の指定したインデックスに要素自体が存在するか確かめる　hasOwnPropertyメソッド
const denseArray = [1, undefined, 3];
const sparseArray = [1, , 3];
console.log(denseArray.hasOwnProperty(1)); //存在するのでtrue
console.log(sparseArray.hasOwnProperty(1)); //false


//配列から要素を検索する
const languages = ["Java", "JavaScript", "Ruby"];
const indexOfJS = languages.indexOf("JavaScript");
console.log(indexOfJS);
console.log(languages[indexOfJS]);
console.log(languages.indexOf("JS")); //存在しないため-1



// colorプロパティを持つオブジェクトの配列
const colors = [
  { "color": "red" },
  { "color": "green" },
  { "color": "blue" }
];
// `color`プロパティが"blue"のオブジェクトのインデックスを取得
const indexOfBlue = colors.findIndex((obj) => {
  return obj.color === "blue";
});
console.log(indexOfBlue); // => 2
console.log(colors[indexOfBlue]); // => { "color": "blue" }


