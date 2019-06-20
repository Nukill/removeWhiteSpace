const output = document.querySelector('.text');
var area = document.querySelector('.area');
var deleteWhiteSpace = (str)=>{
    var newString = "";
    splittedString = str.split(" ");
    splittedString.forEach((e)=>{
        newString+=e;
    })
    return newString;
}

area.addEventListener('keydown', (event)=>{
    setTimeout(()=>{
        area = document.querySelector('.area');
        var value = area.value;
        output.innerHTML = deleteWhiteSpace(value);
    },200)
})

