import React, { useState } from 'react';
import FormBuilder from './FormBuilder';
import { SelectElement, TextInput } from './FormElements';
import { useFormBuilder } from '../hooks/useFormBuilder';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { v4 as uuid4 } from 'uuid';
import { addElementToContent } from '../store/slices/FormSlice';

type Props = {};

const FormContent = (props: Props) => {
  const dispatch = useAppDispatch();

  const content = useAppSelector((store) => store.formSlice.content);
  const builderElements = useAppSelector((store) => store.formSlice.builderElements);

  const [form, setForm] = useState<any>({
    elements: [TextInput, TextInput, SelectElement],
  });

  const fr = useFormBuilder({
    extensions: builderElements,
    content: content,
    onChange: (c) => {
      console.log(c);
      //   dispatch(addElementToContent({id: uuid4(), element: , settings:  }));
    },
  });

  console.log(fr);

  return (
    <div className="form-content">
      <p className="form-content__title">FORM</p>
      <FormBuilder form={form} />
    </div>
  );
};

export default FormContent;
