
//sort alphabetic the characters in the string
function sortAlphabetic(str)
{
    str=str.toLowerCase();
    arrayStr=str.split("");
    for(i=0;i<arrayStr.length;i++)
    {
        for(j=i+1;j<arrayStr.length;j++)
        {
            if(arrayStr[i] > arrayStr[j])
            {
                var temp=arrayStr[i];
                arrayStr[i]=arrayStr[j]
                arrayStr[j]=temp;
            }
        }
    }
    return arrayStr.join("")
}
console.log(sortAlphabetic("alazar"));