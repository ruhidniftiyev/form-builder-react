import React, { FC } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeElementFromContent } from '../store/slices/FormSlice';

type Props = {
  form: any;
};

const FormBuilder: FC<Props> = ({ form }) => {
  const dispatch = useAppDispatch();

  const removeFormElementAction = (id: string) => {
    dispatch(removeElementFromContent(id));
  };

  return (
    <div className="form-builder">
      <form className="form-builder__form">
        {form.length > 0 &&
          form.map((el: any) => (
            <div className="form-builder__form-element">
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
