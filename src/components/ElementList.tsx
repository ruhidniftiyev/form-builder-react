import React from 'react';
import ElementItem from './ElementItem';
import { useAppSelector } from '../hooks/useAppSelector';

type Props = {};

const ElementList = (props: Props) => {
  const builderElements = useAppSelector((store) => store.formSlice.builderElements);

  return (
    <div className="elements">
      <p className="elements__title">ELEMENTS</p>
      <div className="elements__list">
        {builderElements.map((el: any) => (
          <ElementItem {...el} key={el.title} />  
        ))}
      </div>
    </div>
  );
};

export default ElementList;
