import React, { useState } from 'react';

type Props = {};

const FormContent = (props: Props) => {
  const [content, setContent] = useState<any>([
    {
      element: 'input',
      settings: {
        type: 'text',
        placeholder: 'Your name',
      },
    },
    {
      element: 'input',
      settings: {
        type: 'text',
        placeholder: 'Your surname',
      },
    },
    {
      element: 'input',
      settings: {
        type: 'number',
        placeholder: 'Your age',
      },
    },
  ]);

  return (
    <div className="form-content">
      <p className="form-content">FORM</p>
    </div>
  );
};

export default FormContent;
