import {func,afunc,wfunc} from "./func.js"

const data = {
  N: 1000,
}

const main = async ()=>{
  const result = await wfunc(data)
  console.log("finish")
}

const button = document.getElementById("button")
const go = document.getElementById("go")

button.onclick = ()=>{
  console.log("click")
}
go.onclick = ()=>{
  main() 
}
