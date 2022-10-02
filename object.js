var billGates = {
    shirt:{
        color:'white',
        quality:'good',
        price:'234 us$'
    },

    swatter:{
        color:'gray',
        quality:'good',
        warm:'best'
    },

    face:{
        smiling:'yes',
        chosma:'yes'
    }
}

console.log(billGates['face']);
console.log(billGates['shirt']);
console.log(billGates['swatter']);

console.log(billGates['swatter']['color']);
console.log(billGates['face']['smiling']);