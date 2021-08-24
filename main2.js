Array.prototype.mySort = function(){
    //console.log("hola mundo");
    //console.log(this);

    let wall = this.length - 1;
    while( wall >= 0){
        let index = 0;
        while(index <= wall){
            if(this[index] > this[index + 1]){
                let aux = this[index + 1];
                this[index + 1] = this[index];
                this[index] = aux;
            }
            index++;
        }
        wall--;
    }
    return this;
}

String.prototype.printLetterByLetter = function (){
    console.log(this);
}

let notas = [10, 24, 34, 12, 54, 19, 50, 49, 18, 20, 9];

let notas2 = [10, 24, 34, 12, 54, 19, 50, 49, 18, 20, 9];

console.log(notas.mySort());
console.log(notas2.mySort());

let nombre = "Luis Rodriguez";

nombre.printLetterByLetter();