declare global{
    interface Number{
        thousandsSeparator():string
    }
}


// Do not Use Arrow function while creating a extension method
Number.prototype.thousandsSeparator=function():string{
    console.log("Value:",Number(this));
    let result= Number(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    return result;
}

export {}