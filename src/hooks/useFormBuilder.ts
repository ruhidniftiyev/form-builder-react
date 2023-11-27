import { useState } from 'react';
import { IFormElement } from '../models/IFormElement';

interface IFormBuilderProporties {
  extensions: any;
  content: IFormElement[];
  onChange: (c: any) => void;
}

interface IBuilderReturned {
  content: IFormElement[];
  formCustomExtensions: any[];
  addFormElement: (c: any) => void;
  removeFormElement: (index: any) => void;
}

export const useFormBuilder = ({
  extensions,
  content,
  onChange,
}: IFormBuilderProporties): IBuilderReturned => {
  const [formContent, setFormContent] = useState<IFormElement[]>(content);
  const [formCustomExtensions, setFormCustomExtensions] = useState<IFormElement[]>(extensions);

  const addFormElement = (c: any): void => {
    setFormContent([...formContent, c]);
    onChange([...formContent, c]);
  };

  const removeFormElement = (index: any) => {
    setFormContent([...formContent, index]);
    onChange([...formContent, index]);
  };

  return {
    content: formContent,
    formCustomExtensions,
    addFormElement,
    removeFormElement,
  };
};
