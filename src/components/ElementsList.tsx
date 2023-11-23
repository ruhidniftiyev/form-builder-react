import React, { useState } from 'react';
import ElementItem from './ElementItem';
import text from '../assets/text.svg';
import number from '../assets/number.svg';

type Props = {};

const ElementsList = (props: Props) => {
  const [elements] = useState<any>([
    { id: 1, content: text },
    { id: 2, content: number },
  ]);

  return (
    <div className=''>
      {elements.map((el: any) => (
        <ElementItem {...el} />
      ))}
    </div>
  );
};

export default ElementsList;
