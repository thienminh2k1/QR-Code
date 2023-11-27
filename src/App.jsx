import { useState } from 'react'
import QRCode from 'qrcode'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [qrCodeData, setQRCodeData] = useState('')
  const [qrCodeImage, setQRCodeImage] = useState('')

  const createQRCode = () => {
    QRCode.toDataURL(qrCodeData,(err, url) => {
      if(err) {
        console.error('Fail to generate QR Code: ', err)
      }
      setQRCodeImage(url)
    })
  }

  return (
    <div>
      <h1>QR code generator</h1>
      <input 
        type={qrCodeData}
        onChange={(e) => setQRCodeData(e.target.value)}
      />
      <button onClick={createQRCode}>Generate</button>
      <br/>
      <br/>
      <br/>

      { qrCodeImage && 
        <div>
          <img src={qrCodeImage} />
          <br/>
          <a href={qrCodeImage} download='qrcode.png'>Download link</a> 
        </div>
      }
    </div>
  )
}

export default App
