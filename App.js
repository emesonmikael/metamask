import {useLayoutEffect, useState} from 'react';
import { ethers } from 'ethers';
import { getTokenBalance, getBnbBalance, transferBnb, transferToken, getTransaction } from './MetaMaskService';

function App() {

const [transaction, setTransaction] = useState("");

async function checkTransaction() {
  const result = await getTransaction(transaction);

  setMessage(`
  Status: ${result.status}
  Confirmations: ${result.confirmations}`);
}
 const [myAddress, setMyAddress] = useState("");
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState("0x6c4fbe6aefd6e2f541c99fc807436fc152af14bf");
  const [balance, setBalance] = useState('');

  const [toAddress, setToAddress] = useState("0x000000000000000000000000000000000000dead");
  const [quantity, setQuantity] = useState("100");
const [quantity11, setQuantity11] = useState("0.001");
  const [message, setMessage] = useState('');
const [quantity2, setQuantity2] = useState("200");
 

  async function checkBalance() {
    let balance;

    if (contract === "BNB")
      balance = await getBnbBalance(address);
    else
      balance = await getTokenBalance(address, contract);

    setBalance(balance);
    setMessage(``);
  }

  async function transfer() {
    let result;
    if (contract === "BNB")

      result = await transferBnb(toAddress, quantity11);

    else
      result = await transferToken(toAddress, contract, quantity);

    setMessage(JSON.stringify(result));
  }
 async function transfer2() {
    let result;

      result = await transferToken(toAddress, contract, quantity2);

    setMessage(JSON.stringify(result));
  }

  return (

    <div>
      <p>


      </p>
     <p>
<img src="https://i.ibb.co/FWNP740/IMG-0485.jpg" alt="IMG-0485" border="0"/>
</p>

<p>
       <input type="button" value="COMPRAR" onClick={evt => transfer2()} />
      </p>
      <hr />
     <p>

<img src="https://i.ibb.co/QHHt8N3/Air-Pods-Pro-2.jpg" alt="Air-Pods-Pro-2" border="0"/>
</p>
 <p>
      XIAOMI air dots
      </p>
      <p>
        <input type="button" value="COMPRAR" onClick={evt =>transfer()} />
      </p>
      <hr />
      <p>
        {message} 
     
      </p>
<p>
  Transaction: <input type="text" value={transaction} onChange={evt => setTransaction(evt.target.value)} />
  <input type="button" value="Check" onClick={evt => checkTransaction()} />
</p>
    </div >
  );
}

export default App;