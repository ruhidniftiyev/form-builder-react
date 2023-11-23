import React, { useState } from 'react';
import ElementItem from './ElementItem';
import text from '../assets/text.svg';
import number from '../assets/number.svg';

type Props = {};

const ElementList = (props: Props) => {
  const [elements] = useState<any>([
    { id: 1, content: text, color: 'orange' },
    { id: 2, content: number, color: 'green' },
  ]);

  return (
    <div className="element-list">
      {elements.map((el: any) => (
        <ElementItem {...el} />
      ))}
    </div>
  );
};

export default ElementList;
