import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {


  return (
    <div>
      <Contact name='hulk' avatar='https://media.melty.fr/article-4009154-head-f5/hulk.jpg' status={true}/>
      <Contact name='spiderman' avatar='https://static.hitek.fr/img/actualite/ill_m/1439502984/illustrnouveauspiderman.jpg' status={false}/>
      <Contact name='batman' avatar='https://www.sideshow.com/storage/product-images/903353/batman_dc-comics_feature.jpg' status={true}/>
    </div>
  );
}

export default App;
