import React from 'react';
import ElementItem from './ElementItem';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addElementToContent } from '../store/slices/FormSlice';
import { SelectElement, TextInput } from './FormElements';

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
              dispatch(addElementToContent({ id: 6, element: el.name, settings: el.settings }))
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
