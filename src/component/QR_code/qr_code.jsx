import React from 'react';
import QRCode from 'react-qr-code';
// import QRCode from 'qrcode'
import { useState } from 'react'


export default function Qr_code() {
  // const my_code = document.querySelector();
  const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

  return (
    <div className="qrcode">
     <h1>QR Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
    </div>
  );
}
