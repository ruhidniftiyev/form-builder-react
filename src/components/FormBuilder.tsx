import React, { FC } from 'react';
import { TiDelete } from 'react-icons/ti'
import { useAppDispatch } from '../hooks/useAppDispatch';

type Props = {
  form: any;
};

const FormBuilder: FC<Props> = ({ form }) => {


  return (
    <div className="form-builder">
      <form className="form-builder__form">
        {form.length > 0 &&
          form.map((el: any) => (
            <div className="form-builder__form-element">
              {el.render()}
              <TiDelete onClick={} className="form-builder__form-element__clear" />
            </div>
          ))}
      </form>
    </div>
  );
};

export default FormBuilder;
