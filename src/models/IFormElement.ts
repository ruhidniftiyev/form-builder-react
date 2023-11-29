export interface IFormElement {
  id?: string;
  element: string;
  settings: IInputSettings | ISelectSettings;
}

export type SettingsType = IInputSettings | ISelectSettings;

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
