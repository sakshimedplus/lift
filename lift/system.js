let elem = document.getElementById("lift");   
function myMove(b) {
  // moves up
  console.log(elem.style.marginTop);
  let pos = elem.style.marginTop;
  clearInterval();
   setInterval(frame, 150);
  function frame() {
    if (pos >= b) {
      clearInterval();
    } else {
      pos++; 
      elem.style.marginTop = pos + "%";  
      console.log(elem.style.top);
      // clearInterval();
    }
  }
}
function myMove1(b) {  
 // moves down
 console.log(elem.style.marginTop);
  let pos = elem.style.marginTop;
  clearInterval();
   setInterval(frame1, 150);
  function frame1() {
    if (pos <= b) {
      clearInterval();
    } else {
      pos--; 
      elem.style.marginTop = pos + "%"; 
      
      
    }
  }
}
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
// function use()

let posi=[5,60,118,175,233,290];
let u=[0,0,0,0,0,0];
let d=[0,0,0,0,0,0];
function lift(i){ 
var t=i.value;
var j=parseInt(t.slice(-1));
// alert(j);
  k=t.slice(0,-1);
  // alert(k);
  if(k=="Up")
  {
    u[j]=1;
    alert(u,j);
    myMove1(posi[5-j]);
}
 if(k=="i")
{
  alert(j);
if (posi[j]>current)
{
  u[j]=1;
alert(u);
myMove(posi[j]);

}
else
{
  d[j]=1;
alert(d);
myMove(posi[j]);
}
}
  if(k=="Down")
  {
    d[j]=1;
   alert(j);
   myMove(posi[5-j]);
  
  } 
  // alert(u,d);
  // for(z=0;z<=5;z++)
  //   {
  //     if(u[z]==1)
  //     {
  //       console.log(pos[z],pos[current],z,u);
  //       myMove1(pos[z],pos[0]);
  //       clearInterval();
  //       u[j]=0;
  //       current=z;
  //     }
  //   }   
  //   for(z=0;z<=5;z++)
  //   {
  //     if(d[z]==1)
  //     {
  //       console.log(pos[z],pos[current],z,u);
  //       myMove(pos[current],pos[5-z]);
  //       clearInterval();
  //       d[j]=0;
  //       current=z;
  //     }
  //   }
  }