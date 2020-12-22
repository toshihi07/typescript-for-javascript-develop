// これを付けないと、ファイルがモジュール化されないので、グローバル空間に登録されてしまう。グローバル空間にすでに登録されている変数名などをつけようとすると、エラーになる。
export{};

let name: String = "typescript";
console.log( {name} );


let isFinished: boolean = true;
isFinished = false;
console.log( {isFinished} );
