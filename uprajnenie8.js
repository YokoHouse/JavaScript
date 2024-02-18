function solve(radius){
    let result;

    if(!typeof radius === Number){
        console.log(`We can not calculate the circle area, because we receive a ${radius}.`)
    } else {
        result = Math.PI * radius ** 2;
    }

    console.log(result.toFixed(2));
}

solve(5);