import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList'

function App() {
  const Contact = [
      {
          name: 'Molly',
          avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
          status: false,
      },
      {
          name: 'Lea',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          status: false,
      },
      {
          name: 'James',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          status: true,
      },
      {
          name: 'Cameron',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          status: true,
      },
      {
          name: 'Xian',
          avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
          status: true,
      }
  ];

  return (
      <div className="App">
        <ContactList Contact={Contact}/>
      </div>
    );
  }

  export default App;
