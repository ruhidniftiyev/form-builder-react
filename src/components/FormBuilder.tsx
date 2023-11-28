import React, { FC } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useAppDispatch } from '../hooks/useAppDispatch';
import {
  addElementToContent,
  isSelected,
  removeElementFromContent,
} from '../store/slices/FormSlice';
import { useDrop } from 'react-dnd';
import { IFormElement } from '../models/IFormElement';
import { v4 as uuid4 } from 'uuid';
import { useAppSelector } from '../hooks/useAppSelector';

type Props = {
  form: any;
};

const FormBuilder: FC<Props> = ({ form }) => {
  const dispatch = useAppDispatch();
  const selectedElId = useAppSelector((store) => store.formSlice.selectedElementId);

  const removeFormElementAction = (id: string) => {
    dispatch(removeElementFromContent(id));
  };

  const [, drop] = useDrop({
    accept: 'element',
    drop: (item: IFormElement) => {
      dispatch(addElementToContent({ ...item, id: uuid4() }));
    },
  });

  const isSelectedAction = (id: string) => {
    dispatch(isSelected(id));
  };

  return (
    <div ref={drop} className="form-builder">
      <form className="form-builder__form">
        {form.length > 0 &&
          form.map((el: any) => (
            <div
              key={el.id}
              className={
                selectedElId === el.id
                  ? 'form-builder__form-element selected'
                  : 'form-builder__form-element'
              }
              onClick={() => isSelectedAction(el.id)}>
              {el.render()}
              {selectedElId === el.id && (
                <TiDelete
                  onClick={() => removeFormElementAction(el.id)}
                  className="form-builder__form-element__clear"
                />
              )}
            </div>
          ))}
      </form>
    </div>
  );
};

export default FormBuilder;
