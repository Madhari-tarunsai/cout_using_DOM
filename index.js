let count=0
function increment()
{
    let h1=document.getElementById("num")
    count++;
    h1.innerText=count;
}

function decrement()
{
    let h1=document.getElementById("num")
    count--;
    h1.innerText=count;
}

function reset()
{
    let h1=document.getElementById("num")
    count=0;
    h1.innerText=count;
}