import './App.css';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Transfer from './components/Transfer';
import bg from './image/blockchain.jpg';
import { useEffect } from 'react';
function App() {
  //store  sender public key in localstorage 
  localStorage.setItem(
    "publickey",
    "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBoB3ZWOl+yXS2qTz8r64AZ\nmj5OlWjTBt1im5TxleaMu2jw1AlmhLChta6XIRfa3eppy23CBXSDYSa5C6NdXh4G\nksuKpxCmf+y/myD4BlVlnCEN25N1mItRam7n2Rnrkpk3y0lDhbVfCYXovue27nEX\n6ryJhn0S7cnWWX1kWWU96CEdXa8auk0XPs/3AIvji9qtLojikYk0K/I8q7ybdCWF\nLnl8j3gAb/fmK+Zt9UxGC41jV7wUyxRLd3fYKljiOcbPpJ8ntQepb41KPprhCIbQ\nZCOdwqmbu97oR1xhmUi6L+KLyTBPYIDtG2CMIOnTSDPLpej+c9UhlfpbrghuN7ap\nAgMBAAE=\n-----END PUBLIC KEY-----"
  )
  



 console.log(localStorage.getItem('publickey'))
  return (
    <div className="App bg-gradient-to-r bg-[#1D3565] h-[100vh] font-sans" >
      <Navbar />
      <Transaction />
      
    </div>
  );
}

export default App;
