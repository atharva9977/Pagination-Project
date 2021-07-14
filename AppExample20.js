import React from 'react'

const AppExample20=()=>{

const add=(e,f,g,h)=>{
return e+f+g+h;
}

const doSomething=()=>{
var x=[10,20,30,40];
alert(add(x[0],x[1],x[2],x[3]));
alert(add(...x));     //spread operator

var a,b,c,d;
[a,b,c,d]=[...x];

alert(a);
alert(b);
alert(c);
alert(d);


}


return(
<div>
<h1>Thinking machines</h1>
<button onClick={doSomething}>Spread Operator</button>
</div>

)

}



export default AppExample20