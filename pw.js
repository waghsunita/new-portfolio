function add()
{
    var x,y,z;
    x = parseInt(document.getElementById("first").value);
    y = parseInt(document.getElementById("second").value);
    z = x+y;
    document.getElementById("answer").value = z;
}
function sub()
{
    x = parseInt(document.getElementById("first").value);
    y = parseInt(document.getElementById("second").value);
    z = x-y;
    document.getElementById("answer").value = z;
}   
function multi()
{
    x = parseInt(document.getElementById("first").value);
    y = parseInt(document.getElementById("second").value);
    z = x*y;
    document.getElementById("answer").value = z;
}   
function div()
{
    x = parseInt(document.getElementById("first").value);
    y = parseInt(document.getElementById("second").value);
    z = x/y;
    document.getElementById("answer").value = z;
}