import React, { useState } from 'react';
import ElementItem from './ElementItem';
import text from '../assets/text.svg';
import number from '../assets/number.svg';

type Props = {};

const ElementList = (props: Props) => {
  const [elements] = useState<any>([
    { id: 1, content: text, color: 'orange', title: 'Text input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
    { id: 2, content: number, color: 'green', title: 'Number input' },
  ]);

  const SelectInput = elements.extend({
     
   })

  return (
    <div className="elements">
      <p className="elements__title">ELEMENTS</p>
      <div className="elements__list">
        {elements.map((el: any) => (
          <ElementItem {...el} />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
