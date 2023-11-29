import React from 'react';
import SettingsContent from './SettingsContent';


const FormSettings = () => {
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
