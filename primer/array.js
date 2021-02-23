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

