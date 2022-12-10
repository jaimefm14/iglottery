import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


// const APP_ID = '1133973920641097';
// console.log('fetch');
//   fetch(`https://www.facebook.com/v15.0/me/accounts?access_token=EAAQHVZBC5cEkBAA5WgSE0ZBOi0TSEmJnzkxipdcTH5aEK8KMxYXEplUCiFuhlMpb97zxwilbgRsn6sWmJUacv2JLhSLkjOUgTn7y6qF9KSiIJlsQQmAcyFf7vBifln5iVFha0AvaGx6y7Qr6WqGlSVUrUolfCPyxzH1iAXeGBpGu8HFZBhMoFALPBQYtmfr5oJZBRxn2EQZDZD`, {mode: 'no-cors'}).then((response)=>{
//     console.log('respuesta');
//     console.log(response);
//   })

function App() {
  const [count, setCount] = useState(0)







  // console.log('fetch');
  // fetch(`https://www.facebook.com/v15.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=https://www.facebook.com/connect/login_success.html`).then((response)=>{
  //   console.log('respuesta');
  //   console.log(response);
  // })


  // console.log('fetch');
  // fetch(`https://www.facebook.com/v15.0/me/accounts?access_token=EAAQHVZBC5cEkBAMQ76ZA21CSnfQbB2EvXAuIhkRUQWC1naRovsC0gNglCiwEjwGPYBl8wlSMRhCXaYgDUrzvYeEsiaFTwoPlvrX2hsOQeCB15UTtZBmVpY2uPPnvtbqiu4PX2DCZB4iyYIZCZAWal5uIsZC64S6OdXutwJZCVMfvXIXRufkSzWGG83ecaRsoYIxEdD4nMUqPX6Rwa5ZAna0DiTRsGdIAzXdRb7RkNra3DjE2miGyxDh8e`, {mode: 'no-cors'}).then((response)=>{
  //   console.log('respuesta');
  //   console.log(response);
  // })



  // me/accounts?access_token=EAAQHVZBC5cEkBAMQ76ZA21CSnfQbB2EvXAuIhkRUQWC1naRovsC0gNglCiwEjwGPYBl8wlSMRhCXaYgDUrzvYeEsiaFTwoPlvrX2hsOQeCB15UTtZBmVpY2uPPnvtbqiu4PX2DCZB4iyYIZCZAWal5uIsZC64S6OdXutwJZCVMfvXIXRufkSzWGG83ecaRsoYIxEdD4nMUqPX6Rwa5ZAna0DiTRsGdIAzXdRb7RkNra3DjE2miGyxDh8e




  // https://www.facebook.com/v15.0/dialog/oauth?client_id=1133973920641097&redirect_uri="https://www.facebook.com/connect/login_success.html"&state={"{st=state123abc,ds=123456789}"}






  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
