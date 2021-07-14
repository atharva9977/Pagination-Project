import React from 'react'

function produceFactorial(num,addressOfAFunctionWhoWillAcceptDelivery)
{
setTimeout(function(){
var e,f;
e=f=1;
while(e<=num)
{
f=f*e;
e++;
}
addressOfAFunctionWhoWillAcceptDelivery(f);
},10000);




}

const AppExample12=()=>{
const buttonClickHandler=()=>{
produceFactorial(5,function(factorial){
alert('The factorial of 5 is: '+factorial);
});
alert('Factorial is being produced somewhere else');
}

return(
<div>
<h1>Thinking Machines</h1>
<button type='button' onClick={buttonClickHandler}>Click Me Buddy</button>

</div>


)



}
export default AppExample12;