import React, { useState } from 'react';
import FormBuilder from './FormBuilder';
import { SelectElement, TextInput } from './FormElements';

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

  const [form, setForm] = useState<any>({
    elements: [TextInput, TextInput, SelectElement],
  });

  return (
    <div className="form-content">
      <p className="form-content__title">FORM</p>
      <FormBuilder forma={form} />
    </div>
  );
};

export default FormContent;
