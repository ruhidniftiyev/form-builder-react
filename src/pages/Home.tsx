import React from 'react';
import ElementList from '../components/ElementList';
import FormSettings from '../components/FormSettings';
import FormContent from '../components/FormContent';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <ElementList />
      <FormContent />
      <FormSettings />
    </div>
  );
};

export default Home;
