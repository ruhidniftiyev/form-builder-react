import { IBuilderElement } from '../models/IBuildingElements';
import { IFormElement } from '../models/IFormElement';
interface IFormBuilderProporties {
  extensions: IBuilderElement[];
  content: IFormElement[];
}

export const useFormBuilder = ({ extensions, content }: IFormBuilderProporties): any => {
  const formCustomExtensions = content.map((el: IFormElement) => {
    return extensions.some((extension: IBuilderElement) => extension.name === el.element)
      ? {
          ...extensions.find((e: any) => e.name === el.element),
          id: el.id,
          settings: el.settings,
        }
      : null;
  });

  return formCustomExtensions;
};
