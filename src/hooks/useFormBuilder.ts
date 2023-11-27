import { useState } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

interface IFormElement {
  type: string;
  placeholder: string;
}

interface IFormBuilderProporties {
  extensions: any;
  content: IFormElement[];
  onChange: (c: any) => void;
}

interface IBuilderReturned {
  content: IFormElement[];
  addFormElement: (c: any) => void;
  removeFormElement: (index: any) => void;
}

export const useFormBuilder = ({
  extensions,
  content,
  onChange,
}: IFormBuilderProporties): IBuilderReturned => {
  const [formContent, setFormContent] = useState<IFormElement[]>(content);

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
    addFormElement,
    removeFormElement,
  };
};
