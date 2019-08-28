function removeCharacter(str,num)
{
let afterremoved=""
for(i=0;i<str.length;i++)
{
if(i==num)
{
    continue
}
afterremoved+=str[i];
}
return afterremoved;
}
console.log(removeCharacter("awet",2))