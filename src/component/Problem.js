import React from 'react'

export default function Problem() {
    let a=prompt();
    let fact=1;
    while(a){
        fact*=a;
        a-=1;
    }
  return (
    <div>
      <h1>Input--{a}</h1>
       <h1>Output{fact}</h1>
    </div>
  )
}
