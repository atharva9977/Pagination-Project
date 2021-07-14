import React from 'react'

const AppExample18=()=>{

const arrayReducer=()=>{
var x=[10,20,30];
var j=x.reduce((a,b,c,d)=>{
alert(a);
alert(b);
alert(c);
alert(d);
return a+b;
},0);
alert("total is:" +j);
}

return(
<div>
<h1>Thinking Machines</h1>
<button onClick={arrayReducer}>Array Reducer</button>

</div>

)

}
export default AppExample18