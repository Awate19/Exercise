
//reverse the given number
function reverseNumber(number)
{
    let reversedNumber=0;
    while(number >0)
    {
    let  remainder=number%10;
    reversedNumber=(reversedNumber*10) + remainder;
    number=parseInt(number/10)
    }
    return reversedNumber
}
console.log(reverseNumber(856));