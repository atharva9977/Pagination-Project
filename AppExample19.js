import React from 'react'

const AppExample19=()=>{

const reducer1=(value,action)=>{
if(action==="UP") return value+1;
if(action==="DOWN") return value-1;
return value;
}

const reducer2=(obj,action)=>{
if(action==="UP") obj.value++;
if(action==="DOWN") obj.value--;
return obj;
}

const reducer3=(obj,action)=>{

var m={"value":obj.value}

if(action==="UP") m.value++;
if(action==="DOWN") m.value--;
return m;

}


const doSomething=()=>{

var v=10;
alert(reducer1(v,"UP"));
alert(v);
alert(reducer1(v,"DOWN"));
alert(v);

var k={"value":100}

alert(reducer2(k,"UP").value);
alert(k.value);
alert(reducer2(k,"DOWN").value);
alert(k.value);

var r={"value":300}

alert(reducer3(r,"UP").value);
alert(r.value);
alert(reducer3(r,"DOWN").value);
alert(r.value);

}

return(
<div>
<h1>Thinking Machines</h1>

<button onClick={doSomething}>Reducer(Pure Function)</button>
</div>

)

}



export default AppExample19 