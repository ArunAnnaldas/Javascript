let a=[10,20,30,40,50,60];

let b=10;
let i=0;

do{
  if(b==a[i]){
    console.log("Number is found at position " + (i+1));
    flag=true;
    break;
  }
  i++;
}while(i<a.length)

if(flag==false){
  console.log("Number not found");
}
