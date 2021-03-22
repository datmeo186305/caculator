function add(value) {
    if (value && value.toString().length >= 2) {
        //C1
        return this.add(eval(value.toString().split("").join("+")));
        
        //C2
        // return this.add(value.toString().split("").reduce((sum,currentValue)=> sum += (+currentValue), 0));
    } else {
        return value;
    }
}
let result = this.add(9875);
console.log(result);

