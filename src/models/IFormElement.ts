export interface IFormElement {
  id?: string;
  element: string;
  settings: any;
}

export interface IInputSettings {
  label: string;
  placeholder: string;
}

interface ISelectOption {
  id: string;
  option: string;
}

export interface ISelectSettings {
  label: string;
  options: ISelectOption[];
}
