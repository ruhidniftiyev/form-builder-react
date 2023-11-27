import React, { FC } from 'react';

type Props = {
  forma: any;
};

const FormBuilder: FC<Props> = ({ forma}) => {
  return (
    <div className='form-builder'>
      <form className='form-builder__form'>
        {
          forma.elements.map((el: any) => (
            el.render()
          ))
        }
      </form>
    </div>
  );
};

export default FormBuilder;
