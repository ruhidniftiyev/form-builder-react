import React from 'react';
import FormBuilder from './FormBuilder';
import { SelectElement, TextInput } from './FormElements';
import { useFormBuilder } from '../hooks/useFormBuilder';
import { useAppSelector } from '../hooks/useAppSelector';


const FormContent = () => {
  const content = useAppSelector((store) => store.formSlice.content);
  const builderElements = [TextInput, SelectElement];

  const form = useFormBuilder({
    extensions: builderElements,
    content: content,
  });

  return (
    <div className="form-content">
      <p className="form-content__title">FORM</p>
      {<FormBuilder form={form} />}
    </div>
  );
};

export default FormContent;
