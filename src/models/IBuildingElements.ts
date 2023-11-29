import {
  ICheckBoxSettings,
  IInputSettings,
  IRadioButtonsSettings,
  ISelectSettings,
  ITextAreaSettings,
} from './IFormElement';

type SettingsType =
  | IInputSettings
  | ISelectSettings
  | ICheckBoxSettings
  | IRadioButtonsSettings
  | ITextAreaSettings;

export interface IBuilderElement {
  id?: any;
  title: string;
  name: string;
  description: string;
  icon: any;
  settings: SettingsType;
  color: string;
  renderSettings: (
    settings: SettingsType,
    handleInputChange: (newSettings: SettingsType) => void,
  ) => React.ReactElement;

  render: () => React.ReactElement;
}
