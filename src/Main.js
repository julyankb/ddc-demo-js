import {React, useEffect, useState} from "react";
import { extensionSetup, uploadToDDC, downloadFromDDC } from "./actions";

const Main = (props) => {

    // State variables
    const [accounts, setAccounts] = useState([]);

    const [status, setStatus] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [output, setOutput] = useState("Default output");
    const [uploadData, setUploadData] = useState(null);
    const [preview, setPreview] = useState(null);

    // DDC variables
    const [rpc, setRPC] = useState("wss://rpc.testnet.cere.network:9945");
    const [contract_address, setContractAddress] = useState("5DTZfAcmZctJodfa4W88BW5QXVBxT4v7UEax91HZCArTih6U")
    const [walletSeed, setWalletSeed] = useState("");
    const [clusterId, setClusterId] = useState("");

    // Buttons
    const connectWalletPressed = async () => {
        const { status, accounts } = await extensionSetup();
        setStatus(status);
        setAccounts(accounts);
    };

    const onClearOutputPressed = async () => {
        setStatus("");
        setOutput("");
    };

    const onUploadPressed = async () => {
        setStatus("");
        setOutput("");
      }
    
    const onDownloadPressed = async () => {
        setStatus("");
        setOutput("");
    }
    
    return (   
        <div className="Main">
          <br></br>
          <button id="walletButton" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? ("Connected: " + String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)) : (<span>Connect</span>)}
          </button>
          <br></br>
          <h1 id="title"> Upload and download data to DDC with Cere SDK </h1>
    
          <div class="header">
            <h3>Status message:</h3>
          <p id="status"> {status} </p>
          </div>

          <div class="header2">
            <h3>Outputs:</h3>
          <p id="output"> {output} </p>
          <p id="output"> {accounts} </p>
          </div>
          <button id="actionButton" onClick={onClearOutputPressed}>Clear output</button>      
          

          <br></br><br></br>
          &nbsp;
          <h2> Create a bucket </h2>
          <input type="text" placeholder="RPC" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="Contract address" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="Wallet seed" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="Cluster ID" onChange={(event) => setStatus(event.target.value)}/>
          <button id="actionButton" onClick={onDownloadPressed}> Create bucket </button>      

          <br></br><br></br><br></br>
          <h2> Upload your file to DDC </h2>
          {<img src={preview} style={{width: "200px"}}></img>}
          <br></br>
          <form class="form" id="myform">
          <input type="file" id="inpFile" onChange={(event) => { setUploadData(event.target.files[0]); setPreview(URL.createObjectURL(event.target.files[0])); }}></input>
          </form>
          <input type="text" placeholder="Bucket ID" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="CDN node URL" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="Wallet seed" onChange={(event) => setStatus(event.target.value)}/>
          &nbsp;
          <button id="actionButton" onClick={onUploadPressed}> Upload </button>      
    
          <br></br><br></br>
          &nbsp;
          <h2> Download your file from DDC </h2>
          <input type="text" placeholder="Content ID" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="Bucket ID" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="CDN node URL" onChange={(event) => setStatus(event.target.value)}/>
          <input type="text" placeholder="Wallet seed" onChange={(event) => setStatus(event.target.value)}/>
          <button id="actionButton" onClick={onDownloadPressed}> Download </button>      
    
        </div>
      );
    };
    
    export default Main;