import React from 'react';
import ElementItem from './ElementItem';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addElementToContent, isSelected } from '../store/slices/FormSlice';
import { SelectElement, TextInput } from './FormElements';
import { v4 as uuid4 } from 'uuid';

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
            onClick={() => {
              let id = uuid4();
              dispatch(addElementToContent({ id, element: el.name, settings: el.settings }));
              dispatch(isSelected(id));
            }}
            {...el}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
