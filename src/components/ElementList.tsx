import React from 'react';
import ElementItem from './ElementItem';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addElementToContent, isSelected } from '../store/slices/FormSlice';
import { SelectElement, TextInput } from './FormElements';
import { v4 as uuid4 } from 'uuid';
import { IBuilderElement } from '../models/IBuildingElements';

const ElementList = () => {
  const dispatch = useAppDispatch();

  const builderElements = [TextInput, SelectElement];

  const addElementToContentAction = (element: IBuilderElement) => {
    let id = uuid4();
    dispatch(addElementToContent({ id, element: element.name, settings: element.settings }));
    dispatch(isSelected(id));
  };

  return (
    <div className="elements">
      <p className="elements__title">ELEMENTS</p>
      <div className="elements__list">
        {builderElements.map((element: IBuilderElement) => (
          <ElementItem
            onClick={() => addElementToContentAction(element)}
            {...element}
            key={element.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
