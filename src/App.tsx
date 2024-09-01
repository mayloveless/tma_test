import { useState } from 'react'
import './App.css'
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <TonConnectButton />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
      </TonConnectUIProvider>
  )
}

export default App