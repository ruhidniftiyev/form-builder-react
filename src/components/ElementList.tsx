import React, { useState } from 'react';
import ElementItem from './ElementItem';
import text from '../assets/text.svg';
import number from '../assets/number.svg';
import { SelectElement, TextInput } from './FormElements';

type Props = {};

const ElementList = (props: Props) => {
  const [elements, setElements] = useState<any>([TextInput, SelectElement]);

  return (
    <div className="elements">
      <p className="elements__title">ELEMENTS</p>
      <div className="elements__list">
        {elements.map((el: any) => (
          <ElementItem {...el} key={el.title} />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
