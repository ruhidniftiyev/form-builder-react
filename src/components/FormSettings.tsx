import React from 'react';
import SettingsContent from './SettingsContent';

type Props = {};

const FormSettings = (props: Props) => {
  return (
    <div className="form-settings">
      <p className="form-settings__title">SETTINGS</p>
      <div>
        <SettingsContent />
      </div>
    </div>
  );
};

export default FormSettings;
