import React, { FC } from 'react';

type Props = {
  form: any;
};

const FormBuilder: FC<Props> = ({ form}) => {
  return (
    <div className='form-builder'>
      <form className='form-builder__form'>
        {
          form.elements.map((el: any) => (
            el.render()
          ))
        }
      </form>
    </div>
  );
};

export default FormBuilder;
