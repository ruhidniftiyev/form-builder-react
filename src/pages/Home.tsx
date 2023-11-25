import React from 'react';
import ElementList from '../components/ElementList';
import FormBuilder from '../components/FormBuilder';
import FormSettings from '../components/FormSettings';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <ElementList />
      <FormBuilder />
      <FormSettings />
    </div>
  );
};

export default Home;
