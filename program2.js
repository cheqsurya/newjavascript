const b =()=>{

  const c = 5201
  
  const d = (c%4==0 && c%100!=0 || c%400==0)? "it is a leap year " : "it is not a leap year"

  console.log("answer : " , d);
  


}
b()