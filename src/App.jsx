import './App.scss';
import { RoutesFind } from "./RoutesFind";
import { Web3ReactProvider } from '@web3-react/core';
import { metaMask, metaMaskHooks, walletConnectV2Hooks, walletConnectV2 } from './connectors/wallets';
import { ManageProvider } from './layouts/ManageProvider';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
];

function App() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <ManageProvider>
        <RoutesFind />
      </ManageProvider>
      <ToastContainer />
    </Web3ReactProvider>
  );
}

export default App;
