let posi=[77,63,47,32,16,1];
let u=[0,0,0,0,0,0];
let d=[0,0,0,0,0,0];
let count=0;
const elem = document.getElementById("lift");   
let pos =  77;
function down(a) {
  console.log(pos);
let id = null;
clearInterval(id);
id = setInterval(frame, 5);
function frame(a) {
  if (pos >= a || pos>77) {
    clearInterval(id);
  } else {
    pos++; 
    elem.style.marginTop = pos + "vh"; 
    
  }
}

}
function up(a) {
 console.log(pos+" pos up a "+a);
let id = null;
clearInterval(id);
id = setInterval(frame1, 5);
function frame1(a) {
  if (pos <= a || pos<1) {
    clearInterval(id);
  } else {
    pos--; 

    elem.style.marginTop = pos + "vh"; 
    
  }
}
}

function lift(i){ 
  var t=i.value;
  var j=parseInt(t.slice(-1));
  
    k=t.slice(0,-1);
    
    if(k=="Up" && u[j]==0)
    {
      
      u[j]=1;
     count++;
   
   //  console.log(count+" up u[] "+u);
    // lift_motion();
  }
   if(k=="i")
  {
    alert(j);
  // if (posi[j]>current)
  // {
  //   u[j]=1;
  // alert(u);
  
  // }
  // else
  // {
  //   d[j]=1;
  // alert(d);
  // myMove(posi[j]);
  // }
   }
    if(k=="Down" && d[j]==0)
    {
      d[j]=1;
      count++;
   //   console.log(count+" down d[] "+u);
    //lift_motion();
    
    }
    console.log(count+" down d[] "+d+" up u[] "+u);
    lift_motion();
  }
function lift_motion()
{
  console.log(count);
    while(count>=0)
    {
        let max_u=-1;
        let max_d=-1;
        for(i=0;i<=5;i++)
    {
        if(u[i]==1)
       { 
        setTimeout(function() {  up(posi[i]); }, 1000);
        u[i]=0;
        count--;
        max_u=i;
    }
    if(d[i]==1)
    max_d=i;
    }
    if(max_d>max_u)
    {
        u[max_d]=1;
        d[max_d]=0;
        continue;
    }

    for(i=5;i>=0;i--)
    {
        if(d[i]==1)
        setTimeout(function() {  down(posi[i]); }, 2000);
        u[i]=0;
        count--;

    }
}
setTimeout(function() {  down(posi[0]); }, 5000);
}