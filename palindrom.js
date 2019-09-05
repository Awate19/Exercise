//checks if the string is palindrom or not
function palindrom(str)
{
    var reversedArray=[];
    for(i=str.length-1;i>=0;i--)
    {
        reversedArray.push(str[i])
    }
    var reversedStr=reversedArray.join("");
  
    return (str===reversedStr)?`${str} - Palindrom`:`${str}- Not Palindrom`;
}
console.log(palindrom('alaz'))