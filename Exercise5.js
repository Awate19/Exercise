function checkMultiple(num1,num2)
{
return ((num1%7==0)||(num1%3==0)||(num2%7==0)||(num2%7==0) )?true:false;
}
console.log(checkMultiple(5,10));