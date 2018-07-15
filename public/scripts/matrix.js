
export const transpose = A=>A[0].map((k,i)=>A.map((v)=>v[i]))

export const unitMat = (n)=> [...Array(n)].map((v,i)=> 
  [...Array(n)].map((u,j)=>i===j?1:0))

export const mulMatMat= (A,B)=>{
  const BT = transpose(B)
  const C = A.map(
    column=>BT.map(
      row=>row.reduce(
        (pre,current,k)=>pre+current*column[k],0
      )
    )
  )
  return C 
}


