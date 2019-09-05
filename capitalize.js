//capitalize the first character of the word in the string

function capitalize( str )
{
var arrayStr=str.split(" ");
for(i=0;i<arrayStr.length;i++)
{
  arrayStr[i]= arrayStr[i][0].toUpperCase()+arrayStr[i].slice(1)
}
return arrayStr.join(" ")
}
console.log(capitalize("the brown fox is jump over the lazt dog"));