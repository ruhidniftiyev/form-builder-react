import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import {
  ICheckBoxSettings,
  IInputSettings,
  IRadioButtonsSettings,
  ISelectSettings,
} from '../models/IFormElement';

type ElementItemsProps = {
  name: string;
  icon: string | undefined;
  color: string;
  title: string;
  settings: IInputSettings | ISelectSettings | ICheckBoxSettings | IRadioButtonsSettings;
  onClick: () => void;
};

const ElementItem: FC<ElementItemsProps> = ({ name, icon, color, title, onClick, settings }) => {
  const [, drag] = useDrag({
    type: 'element',
    item: { element: name, settings },
  });

  return (
    <div ref={drag} onClick={onClick} className="element-item">
      <div
        className="element-item__icon"
        style={{ backgroundColor: color, boxShadow: `0px 10px 30px -5px ${color}` }}>
        {icon}
      </div>
      <p className="element-item__title">{title}</p>
    </div>
  );
};

export default ElementItem;
