// سبد خرید

const Aryy : string[] = []

let obj

for(let index = 0 ; index < 4 ; index++){
    obj = {
        name : prompt('enter your name : '),
        age : prompt('rnter your age : ')
    }
    Aryy.push(obj)
}

console.log(Aryy);
