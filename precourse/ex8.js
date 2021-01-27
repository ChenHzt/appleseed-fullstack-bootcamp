function hasDigit(num, digit){
    while(num > 0){
        let lastDigit = num % 10;
        if (lastDigit === digit)
            return true;
        num  = Math.floor(num/10);
    }
    return false;
}

function boom(start, end, boomNum){
    for (let i=start; i<=end;i++)
        if(i % boomNum == 0 || hasDigit(i,boomNum))
            console.log('BOOM');
        else console.log(i);
}

boom(0,100,7);
