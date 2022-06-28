let start = 170111
let end = 172987
let test = {}
let inputUser = 5
getMultiple = (number, results) => {
    for (let i = 2; i <=  (end - start) / 2; i++) {
        if(results[number] == undefined){
            results[number] = []
        }
        if (number % i == 0) {
            results[number].push({first: i, second: number / i });
        }
    }
}

checkCorrect = (first, second, multiple, user) => {
    let checkArray = [...first.split(''), ...second.split(''), ...multiple.split('')]
    checkArray.push(user)
    }

for(let i = start; i < end; i++){
    getMultiple(i, test)
}

console.log(test)