function solve(num){
    let month = ["January", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (num >=1 && num <= 12){
        console.log(month[num - 1]);
    } else{
        console.log("Error");
    }
}

solve(4)