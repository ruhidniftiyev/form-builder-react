export interface IFormElement {
  id?: string;
  element: string;
  settings: IInputSettings | ISelectSettings | ICheckBoxSettings | IRadioButtonsSettings;
}

export type SettingsType =
  | IInputSettings
  | ISelectSettings
  | ICheckBoxSettings
  | IRadioButtonsSettings;

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

export interface IRadioChoices {
  id: string;
  choice: string;
}

export interface IRadioButtonsSettings {
  label: string;
  choices?: IRadioChoices[];
}
