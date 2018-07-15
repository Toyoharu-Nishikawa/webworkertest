import {unitMat, mulMatMat} from "./matrix.js"
"use strict"
export const func = (data)=>{
  console.log("start")
  const start = performance.now()
  
  const N = data.N
  
  const a = unitMat(N)
  const b = unitMat(N)
  
  const c = mulMatMat(a,b)
  
  const end = performance.now()
  const time = end - start
  console.log("end")
  console.log(c)
  console.log("elapsed time", time)
}

export const afunc = (data)=>{
  return new Promise((resolve, reject)=>{
    const res = func(data)
    resolve(res)
  })
}

export const wfunc = (data)=>{
  const base = location.href
  const workerJS = "scripts/worker.js"
  const workerURL = new URL(workerJS,base)
  const worker = new Worker(workerURL,{type:"module"})
  worker.postMessage(data)
  return  new Promise((resolve,reject)=>{
    worker.onmessage = (message)=>{
      resolve(message.data)
    }
  })
}
