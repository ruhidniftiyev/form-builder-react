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
import { IBuilderElement } from '../models/IBuildingElements';

type FormBuilderProps = {
  form: IBuilderElement[];
};

const FormBuilder: FC<FormBuilderProps> = ({ form }) => {
  const dispatch = useAppDispatch();
  
  const [, drop] = useDrop({
    accept: 'element',
    drop: (item: IFormElement) => {
      dispatch(addElementToContent({ ...item, id: uuid4() }));
    },
  });

  const selectedElId = useAppSelector((store) => store.formSlice.selectedElementId);

  const removeFormElementAction = (id: string) => {
    dispatch(removeElementFromContent(id));
  };

  const isSelectedAction = (id: string) => {
    dispatch(isSelected(id));
  };

  return (
    <div ref={drop} className="form-builder">
      <form className="form-builder__form">
        {form.length > 0 &&
          form.map((formElement: IBuilderElement) => (
            <div
              key={formElement.id}
              className={
                selectedElId === formElement.id
                  ? 'form-builder__form-element selected'
                  : 'form-builder__form-element'
              }
              onClick={() => isSelectedAction(formElement.id)}>
              {formElement.render()}
              {selectedElId === formElement.id && (
                <TiDelete
                  onClick={(e: any) => {
                    e.stopPropagation();
                    removeFormElementAction(formElement.id);
                  }}
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
