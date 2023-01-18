let n=41;
let m=15;
function spr(a,b)
{
    if(a==20 || b==20 || a+b<=20) return Boolean(true);
    else return Boolean(false);
}
//sprawdziłem czy działa :)
if(spr(n,m)==true)
{
    console.log('ok');
}
else console.log('nie ok');
