const temperatures = [32, 35, 28, 40, 38, 30, 42]
let res=temperatures.filter(temp=>temp>35)
console.log("temperatures above 35", res)
let res2=temperatures.map(temp=>(temp*9/5)+32)
console.log("temp in fahrenheit",res2)
let res3=temperatures.reduce((sum,temp)=>sum+temp,0)/temperatures.length
console.log("avg of temps",res3)
let res4=temperatures.find(temp=>temp>40)
console.log("teps above 40 ", res4)
let res5=temperatures.findIndex(temp=>temp===28)
console.log("index of temp 28 is ",res5)