import React from 'react';
import ElementItem from './ElementItem';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addElementToContent } from '../store/slices/FormSlice';
import { SelectElement, TextInput } from './FormElements';
import { v4 as uuid4 } from 'uuid';
import { useDrag } from 'react-dnd';

type Props = {};

const ElementList = (props: Props) => {
  const builderElements = [TextInput, SelectElement];

  const dispatch = useAppDispatch();


  return (
    <div className="elements">
      <p className="elements__title">ELEMENTS</p>
      <div className="elements__list">
        {builderElements.map((el: any) => (
          <ElementItem
            onClick={() =>
              dispatch(
                addElementToContent({ id: uuid4(), element: el.name, settings: el.settings }),
              )
            }
            {...el}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
