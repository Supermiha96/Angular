import './style.css'
import './topics/01-basic-types'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    hola mundo
  </div>
`
console.log('hola mundo');
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
