import React from 'react'

const AppExample22=()=>{

const items=[
{code:101,name:"Laptop",stockInHand:50},
{code:102,name:"Speaker",stockInHand:30},
{code:103,name:"Desktop",stockInHand:70}
];

const transactionReducer=(state,action)=>{
const i=[];

var e=0;
while(e<state.length)
{
if(state[e].code===action.code)
{
if(action.transactionType==="PURCHASE")
{
i.push({...state[e],stockInHand:state[e].stockInHand+1});
}else
if(action.transactionType==="SALE")
{
i.push({...state[e],stockInHand:state[e].stockInHand-1});
}else
{
i.push({...state[e]});
}
}
else
{
i.push({...state[e]});
}
e++;
}
return i;
}

const[inventory,dispatchTransaction]=React.useReducer(transactionReducer,items);

return(
<div>
<h1>List of Items</h1>
<ul>
{
inventory.map((item)=>{
return(
<li key={item.code}>{item.name} ({item.stockInHand})&nbsp;&nbsp;
<button onClick={()=>{dispatchTransaction({code:item.code,transactionType:"PURCHASE"});}}>Purchase</button>&nbsp;&nbsp;
<button onClick={()=>{dispatchTransaction({code:item.code,transactionType:"SALE"});}}>Sale</button>&nbsp;&nbsp;
</li>

)


})

}
</ul>

</div>


)



}


export default AppExample22;