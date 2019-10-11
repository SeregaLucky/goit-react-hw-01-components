import React from 'react';
/* import - CSS */
import './App.css';
/* import - DATA */
import user from '../Profile/user.json';
import dataStats from '../Stats/dataStats';
import dataFreindsList from '../FriendList/dataFreindsList.json';
import dataItems from '../TransactionHistory/transactions.json';
/* import - COMPONENT */
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

/*
 * COMPONENT
 */
const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={dataStats} />
    <FriendList friends={dataFreindsList} />
    <TransactionHistory items={dataItems} />
  </>
);

export default App;
