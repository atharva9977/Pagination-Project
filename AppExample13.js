import React from 'react'

function produceFactorial(num)
{
var p=new Promise(function(resolve){

setTimeout(function(){
var e,f;
e=f=1;
while(e<=num)
{
f=f*e;
e++;
}
resolve(f);


},10000);


});
return p;
}

const AppExample13=()=>{
const buttonClickHandler=()=>{
var prms=produceFactorial(5);
alert('Function is being produced somewhere else');
prms.then(function(factorial){
alert('Factorial of 5 is :'+factorial);
});

}
return(
<div>
<h1>Thinking machines</h1>
<button type='button' onClick={buttonClickHandler}>Click ME Buddy</button>
</div>
)


}
export default AppExample13;