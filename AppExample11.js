import React from 'react'

function produceFactorial(num)
{
var e,f;
e=f=1;
while(e<=num)
{
f=f*e;
e++;
}
return f;

}

const AppExample11=()=>{
const buttonClickHandler=()=>{
var factorial=produceFactorial(10);
alert('The factorial of 6 is: '+factorial);
}

return(
<div>
<h1>Thinking Machines</h1>
<button type='button' onClick={buttonClickHandler}>Click Me Buddy</button>

</div>


)



}
export default AppExample11;