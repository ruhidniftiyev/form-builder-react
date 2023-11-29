import React from 'react';
import ElementItem from './ElementItem';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addElementToContent, isSelected } from '../store/slices/FormSlice';
import { CheckBoxElement, RadioButtonsElement, SelectElement, TextInput } from './FormElements';
import { v4 as uuid4 } from 'uuid';
import { IBuilderElement } from '../models/IBuildingElements';
import { IFormElement } from '../models/IFormElement';

const ElementList = () => {
  const dispatch = useAppDispatch();

  const builderElements = [
    TextInput,
    SelectElement,
    CheckBoxElement,
    RadioButtonsElement
    // SelectElement,
  ];

  const addElementToContentAction = (element: IBuilderElement) => {
    let id = uuid4();
    let newElement = { id, element: element.name, settings: element.settings };
    dispatch(addElementToContent(newElement));
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
            key={element.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
