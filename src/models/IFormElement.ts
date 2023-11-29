export interface IFormElement {
  id?: string;
  element: string;
  settings: IInputSettings | ISelectSettings | ICheckBoxSettings;
}

export type SettingsType = IInputSettings | ISelectSettings | ICheckBoxSettings;

export interface IInputSettings {
  label: string;
  placeholder?: string;
}

export interface ISelectOption {
  id: string;
  option: string;
}

export interface ISelectSettings {
  label: string;
  options?: ISelectOption[];
}

export interface ICheckBoxSettings {
  label: string;
  value?: string;
}
