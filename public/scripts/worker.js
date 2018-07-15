//web worker

import {func,afunc} from "./func.js"

onmessage = (message) =>{
  const data = message.data
  const res = func(data)
  postMessage(res)
}
