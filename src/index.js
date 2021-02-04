import React from "react"; 
import ReactDom from "react-dom"; 
import "./index.css";
let currDate=new Date(2021,2,5,15);
currDate=currDate.getHours();
let greeting="";
const cssstyle={};
if(currDate >=1 && currDate < 12){
  greeting="Good Morning";
  cssstyle.color='green';
} else if(currDate >=12 && currDate <19){
  greeting="Good Afternoon ";
  cssstyle.color="Orange";
}else{
  greeting="Good Night";
  cssstyle.color='Black';
}

ReactDom.render(
  <>
  <div>
<h1> Hello Sir, <span style={cssstyle}>{greeting}</span></h1>
</div>
</>,
document.getElementById("root"));