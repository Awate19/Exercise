function addingPy(str)
{
    let thefirst2characters=str.substr(0,2);
return (thefirst2characters=="Py")?str:"Py"+str;
}
console.log(addingPy("Pyalike"))