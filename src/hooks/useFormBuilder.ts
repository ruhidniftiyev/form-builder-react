import { IFormElement } from '../models/IFormElement';

interface IFormBuilderProporties {
  extensions: any;
  content: IFormElement[];
}

export const useFormBuilder = ({ extensions, content }: IFormBuilderProporties): any[] => {
  const formCustomExtensions = content.map((el: any) => {
    return extensions.some((extension: any) => extension.name === el.element)
      ? extensions.find((e: any) => e.name === el.element)
      : null;
  });

  return formCustomExtensions;
};
