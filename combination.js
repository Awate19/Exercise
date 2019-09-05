
//generate the combination of the given string
function combination(str)
{
    var result=[]
    for(i=0;i<str.length;i++)
    {
        result.forEach(ele=>{
            result.push(str[i] + ele)

        });
        result.push(str[i])
    }
    return result;
}
console.log(combination("awet"));