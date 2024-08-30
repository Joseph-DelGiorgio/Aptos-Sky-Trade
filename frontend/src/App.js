import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { WalletProvider } from '@aptos-labs/wallet-adapter-react';
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import AirRightsManagement from './components/AirRightsManagement';
import CreateAirRights from './components/CreateAirRights';
import AirRightsList from './components/AirRightsList';
import TransferAirRights from './components/TransferAirRights';
import WalletConnection from './components/WalletConnection';

const App = () => {
  const wallets = [new PetraWallet()];

  return (
    <WalletProvider
      wallets={wallets}
      autoConnect={true}
      onError={(error) => {
        console.log('Wallet error:', error);
      }}
    >
      <Router>
        <div className="app-container">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Create Air Rights</Link></li>
              <li><Link to="/list">Air Rights List</Link></li>
              <li><Link to="/transfer">Transfer Air Rights</Link></li>
            </ul>
          </nav>

          <WalletConnection />

          <Switch>
            <Route exact path="/" component={AirRightsManagement} />
            <Route path="/create" component={CreateAirRights} />
            <Route path="/list" component={AirRightsList} />
            <Route path="/transfer" component={TransferAirRights} />
          </Switch>
        </div>
      </Router>
    </WalletProvider>
  );
};

export default App;