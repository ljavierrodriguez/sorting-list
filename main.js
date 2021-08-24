let notas = [10, 24, 34, 12, 54, 19, 50, 49, 18, 20, 9];

/* notas.sort((a, b) => a > b ? 1 : -1 );

console.log(notas); */

const bubbleSort = (arr = []) => {
    let wall = arr.length - 1;
    while( wall >= 0){
        let index = 0;
        while(index <= wall){
            if(arr[index] > arr[index + 1]){
                let aux = arr[index + 1];
                arr[index + 1] = arr[index];
                arr[index] = aux;
            }
            index++;
        }
        wall--;
    }
    return arr;
}

console.log(bubbleSort([...notas])); // spread operator

console.log(notas);