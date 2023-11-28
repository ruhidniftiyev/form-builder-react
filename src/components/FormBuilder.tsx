import React, { FC } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addElementToContent, removeElementFromContent } from '../store/slices/FormSlice';
import { useDrop } from 'react-dnd';
import { IFormElement } from '../models/IFormElement';
import { v4 as uuid4 } from 'uuid';

type Props = {
  form: any;
};

const FormBuilder: FC<Props> = ({ form }) => {
  const dispatch = useAppDispatch();

  const removeFormElementAction = (id: string) => {
    dispatch(removeElementFromContent(id));
  };

  const [, drop] = useDrop({
    accept: 'element',
    drop: (item: IFormElement) => {
      dispatch(addElementToContent({ ...item, id: uuid4() }));
    },
  });

  return (
    <div ref={drop} className="form-builder">
      <form className="form-builder__form">
        {form.length > 0 &&
          form.map((el: any) => (
            <div key={el.id} className="form-builder__form-element">
              {el.render()}
              <TiDelete
                onClick={() => removeFormElementAction(el.id)}
                className="form-builder__form-element__clear"
              />
            </div>
          ))}
      </form>
    </div>
  );
};

export default FormBuilder;
