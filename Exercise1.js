/*using If ....else Statment
function tripleTheirSumIfTheyAreSame(num1,num2)
{
  
    let sum=num1+num2
    if(num1===num2)
    {
return sum*=3
    }
    else{
        return sum;
    }
}
*/
//Using Ternary Operator
function tripleTheirSumIfTheyAreSame(num1,num2)
{
    sum=num1+num2;
 return    sum=(num1==num2)?sum*3:sum;
}

console.log(tripleTheirSumIfTheyAreSame(20,20));