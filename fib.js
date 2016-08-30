var a=0;
var b=1;
var r;

for (var c=0;c<process.argv[2];c++)
{
    if (c==0)
    {
      console.log(a);

    }
  else  if(c==1){
      console.log(b);
    }
    else{
  r=a+b
    console.log(r);
    a=b;
    b=r;
  }
}
