import React from 'react';
import ElementList from '../components/ElementList';
import FormSettings from '../components/FormSettings';
import FormContent from '../components/FormContent';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__editor">
        <ElementList />
        <FormContent />
        <FormSettings />
      </div>
    </div>
  );
};

export default Home;
