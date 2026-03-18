const sipTab=document.getElementById("sipTab")
const lumpTab=document.getElementById("lumpTab")

sipTab.onclick=()=>{
sipTab.classList.add("active")
lumpTab.classList.remove("active")

document.getElementById("sipForm").style.display="block"
document.getElementById("lumpForm").style.display="none"
}

lumpTab.onclick=()=>{
lumpTab.classList.add("active")
sipTab.classList.remove("active")

document.getElementById("sipForm").style.display="none"
document.getElementById("lumpForm").style.display="block"
}

function calculateSIP(){

let P=document.getElementById("sipAmount").value
let r=document.getElementById("sipRate").value/100/12
let n=document.getElementById("sipYears").value*12

let futureValue=P*((Math.pow(1+r,n)-1)/r)*(1+r)

let invested=P*n
let returns=futureValue-invested

showResult(invested,returns,futureValue)

}

function calculateLumpsum(){

let P=document.getElementById("lumpAmount").value
let r=document.getElementById("lumpRate").value/100
let n=document.getElementById("lumpYears").value

let futureValue=P*Math.pow((1+r),n)

let invested=P
let returns=futureValue-invested

showResult(invested,returns,futureValue)

}

function showResult(invested,returns,total){

document.getElementById("resultBox").style.display="block"

document.getElementById("invested").innerHTML="Invested Amount: ₹"+Math.round(invested)

document.getElementById("returns").innerHTML="Estimated Returns: ₹"+Math.round(returns)

document.getElementById("total").innerHTML="Total Value: ₹"+Math.round(total)

}