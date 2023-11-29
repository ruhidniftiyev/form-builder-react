import { SettingsType } from './IFormElement';

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
