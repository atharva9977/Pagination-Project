import React from 'react'

const AppExample21=()=>{

const reduceIt=(obj,action)=>{

if(action==="ADD")
{
return{...obj , "result":obj.firstNumber+obj.secondNumber};
}
if(action==="SUBTRACT")
{
return{...obj, "result":obj.firstNumber-obj.secondNumber};
}
return obj;
}




const doSomething=()=>{

var dataObject={
"firstNumber":10,
"secondNumber":20,
"result":0
}

alert(reduceIt(dataObject,"ADD").result);
alert(dataObject.result);
alert(reduceIt(dataObject,"SUBTRACT").result);
alert(dataObject.result);

}

return(
<div>
<h1>Thinking Machines</h1>
<button onClick={doSomething}>Spread Operator</button>
</div>
)

}

export default AppExample21