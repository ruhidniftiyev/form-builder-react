import React from 'react';
import ElementList from '../components/ElementList';
import FormEditor from '../components/FormEditor';
import FormSettings from '../components/FormSettings';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <ElementList />
      <FormEditor />
      <FormSettings />
    </div>
  );
};

export default Home;
