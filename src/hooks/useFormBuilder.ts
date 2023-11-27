import { IFormElement } from '../models/IFormElement';
import { v4 as uuid4 } from 'uuid';

interface IFormBuilderProporties {
  extensions: any;
  content: IFormElement[];
}

export const useFormBuilder = ({ extensions, content }: IFormBuilderProporties): any[] => {
  const formCustomExtensions = content.map((el: any) => {
    return extensions.some((extension: any) => extension.name === el.element)
      ? { ...extensions.find((e: any) => e.name === el.element), id: el.id }
      : null;
  });

  return formCustomExtensions;
};
