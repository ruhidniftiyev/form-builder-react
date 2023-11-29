import { IInputSettings, ISelectSettings } from './IFormElement';

type SettingsType = IInputSettings | ISelectSettings;

export interface IBuilderElement {
  id?: string;
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
