/*
オブジェクトはプロパティの集合です。プロパティとは名前（キー）と値（バリュー）が対になったもの
プロパティのキーには文字列またはSymbolが利用でき、値には任意のデータを指定できる
また、1つのオブジェクトは複数のプロパティを持てるため、1つのオブジェクトで多種多様な値を表現可能
*/

//オブジェクトの作成
const obj = {};

//プロパティを持つオブジェクトを定義(キーはクォーとを省力可能)
const object = {
  "key": "value"
}
//アクセス方法
console.log(object.key);  //ドット記法
console.log(object["key"]);　　//ブラケット記法


const name = "名前";
// `name`というプロパティ名で`name`の変数を値に設定したオブジェクト/ プロパティ名と値に指定する変数名が同じ場合は name のように省略可能
const object_name = {
  name: name
};
console.log(object_name); // => { name: "名前" }


/*
{}はObjectのインスタンスオブジェクト
（{}）は、このビルトインオブジェクトであるObjectを元にして新しいオブジェクトを作成するための構文
ビルトインオブジェクトとはあらかじめjavascriptが定義されているもの（Array Date Boolean Function Math Number Object RegExp）

オブジェクトリテラル以外の方法として、new演算子を使うことで、Objectから新しいオブジェクトを作成可能
*/
const ob = new Object();
console.log(ob);






const languages = {
  ja: "日本語",
  en: "英語"
};
const { ja, en } = languages;
console.log(ja); // => "日本語"
console.log(en); // => "英語"

//languagesオブジェクトにプロパティを追加する
languages.chi = "中国語";
console.log(languages.chi);

//mutable(変わりやすい)な特性を持つので、関数が受け取ったプロパティに対して追加や変更が可能
function changePropertyToCheese(languages) {
  languages.cheese = "チーズ";
}
changePropertyToCheese(languages)
console.log(languages.cheese);

languages.ja = "Japanese";
console.log(ja);




//変数  変数の識別子として扱えない文字列（詳細は「変数と宣言」の章を参照）  Symbolを使う際はブラケット記法を使う
const key = "key-string";
const obje = {};
// `key`の評価結果 "key-string" をプロパティ名に利用
obje[key] = "value of key";
// 取り出すときも同じく`key`変数を利用
console.log(obje[key]); // => "value of key"
