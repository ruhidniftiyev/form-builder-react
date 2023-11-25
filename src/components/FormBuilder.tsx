import React, { useState } from 'react';

type Props = {};

const FormBuilder = (props: Props) => {
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

  return <div className="form-builder">FormBuiler</div>;
};

export default FormBuilder;
