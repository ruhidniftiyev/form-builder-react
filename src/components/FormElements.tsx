import { LuTextCursorInput } from 'react-icons/lu';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { BsTextareaResize } from 'react-icons/bs';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { v4 as uuid4 } from 'uuid';
import { TiDelete } from 'react-icons/ti';
import {
  IInputSettings,
  ISelectOption,
  ISelectSettings,
  ICheckBoxSettings,
} from '../models/IFormElement';

const iconStyles = { color: 'white', width: '50px', height: '1.6em' };

export const TextInput = {
  title: 'Text input',
  name: 'input',
  description: 'Allows to write text.',
  icon: <LuTextCursorInput style={iconStyles} />,
  color: '#990066',

  settings: {
    label: 'Text input',
    placeholder: '',
  },

  renderSettings: function (
    settings: IInputSettings,
    handleInputChange: (newSettings: IInputSettings) => void,
  ): React.ReactElement {
    return (
      <>
        <label htmlFor={settings.label}>Label</label>
        <input
          type="text"
          placeholder={settings.label}
          value={settings.label}
          className="settings-content__form-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, label: e.target.value };
            handleInputChange(newSettings);
          }}
        />
        <label htmlFor={settings.placeholder}>Placeholder</label>
        <input
          type="text"
          placeholder="Max 100 symbol"
          className="settings-content__form-input"
          value={settings.placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, placeholder: e.target.value };
            handleInputChange(newSettings);
          }}
        />
      </>
    );
  },
  render: function () {
    return (
      <>
        <label htmlFor={this.settings.label}>{this.settings.label}</label>
        <input
          placeholder={this.settings.placeholder}
          type="text"
          className="form-builder__form-element__input"
        />
      </>
    );
  },
};

export const SelectElement = {
  title: 'Select',
  name: 'select',
  description: 'Allows to choose from multiple options.',
  icon: <MdOutlinePlaylistAddCheck style={iconStyles} />,
  color: 'orange',

  settings: {
    label: 'Select',
    options: [],
  },

  renderSettings: function (
    settings: ISelectSettings,
    handleSelectChange: (newSettings: ISelectSettings) => void,
  ) {
    return (
      <>
        <label htmlFor={settings.label}>Label</label>
        <input
          value={settings.label}
          className="settings-content__form-input"
          placeholder={settings.label}
          onChange={(e) => {
            const newSettings = { ...settings, label: e.target.value };
            handleSelectChange(newSettings);
          }}
        />
        <label htmlFor={settings.label}>Choices</label>
        {settings.options?.map((item: ISelectOption) => (
          <div className="settings-content__form-select__option">
            <input
              className="settings-content__form-select__option-input"
              key={item.id}
              type="text"
              value={item.option}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const updatedOptions = settings.options?.map((el: ISelectOption) =>
                  el.id === item.id ? { ...el, option: e.target.value } : el,
                );
                const newSettings = {
                  ...settings,
                  options: updatedOptions,
                };
                handleSelectChange(newSettings);
              }}
            />
            <TiDelete
              onClick={() => {
                const newSettings = {
                  ...settings,
                  options: settings.options?.filter((el: ISelectOption) => el.id !== item.id),
                };
                handleSelectChange(newSettings);
              }}
              className="settings-content__form-select__option-delete"
            />
          </div>
        ))}
        <button
          onClick={() => {
            const newSettings = {
              ...settings,
              options: settings.options && [...settings.options, { id: uuid4(), option: '' }],
            };
            handleSelectChange(newSettings);
          }}
          className="settings-content__form-select__addBtn">
          <IoIosAddCircle className="settings-content__form-select__addIcon" />
          Add new
        </button>
      </>
    );
  },

  render: function () {
    return (
      <>
        <label htmlFor="">{this.settings.label}</label>
        <select className="form-builder__form-element__select" name="" id="">
          {this.settings.options.length > 0 &&
            this.settings.options.map((optionElement: ISelectOption) => (
              <option value={optionElement.option}>{optionElement.option}</option>
            ))}
        </select>
      </>
    );
  },
};

export const CheckBoxElement = {
  title: 'Checkbox',
  name: 'checkbox',
  description: 'Allows to check...',
  icon: <FaRegSquareCheck style={iconStyles} />,
  color: 'blue',

  settings: {
    label: 'Checkbox',
    value: '',
  },

  renderSettings: function (
    settings: ICheckBoxSettings,
    handleInputChange: (newSettings: ICheckBoxSettings) => void,
  ): React.ReactElement {
    return (
      <>
        <label htmlFor={settings.label}>Label</label>
        <input
          type="text"
          placeholder={settings.label}
          value={settings.label}
          className="settings-content__form-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, label: e.target.value };
            handleInputChange(newSettings);
          }}
        />
        <label htmlFor={settings.value}>Value</label>
        <input
          type="text"
          placeholder="value"
          className="settings-content__form-input"
          value={settings.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, value: e.target.value };
            handleInputChange(newSettings);
          }}
        />
      </>
    );
  },
  render: function () {
    return (
      <>
        <label htmlFor={this.settings.label}>{this.settings.label}</label>
        <div className="form-builder__form-element-checkbox">
          <input type="checkbox" className="form-builder__form-element-checkbox__input" />
          <label htmlFor={this.settings.value}>{this.settings.value}</label>
        </div>
      </>
    );
  },
};

export const RadioButtonsElement = {
  title: 'Radio buttons',
  name: 'radio',
  description: 'Allows to check...',
  icon: <IoMdRadioButtonOn style={iconStyles} />,
  color: 'coral',

  settings: {
    label: 'Radio buttons',
    choices: [],
  },

  renderSettings: function (
    settings: ICheckBoxSettings,
    handleInputChange: (newSettings: ICheckBoxSettings) => void,
  ): React.ReactElement {
    return (
      <>
        <label htmlFor={settings.label}>Label</label>
        <input
          type="text"
          placeholder={settings.label}
          value={settings.label}
          className="settings-content__form-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, label: e.target.value };
            handleInputChange(newSettings);
          }}
        />
        <label htmlFor={settings.value}>Value</label>
        <input
          type="text"
          placeholder="value"
          className="settings-content__form-input"
          value={settings.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, value: e.target.value };
            handleInputChange(newSettings);
          }}
        />
      </>
    );
  },
  render: function () {
    return (
      <fieldset>
        <label htmlFor={this.settings.label}>{this.settings.label}</label>
        {this.settings.choices?.map((choise) => (
          <>
            <input type="radio" value={choise} className="form-builder__form-element-radio" />
            <label htmlFor={choise}>{choise}</label>
          </>
        ))}
      </fieldset>
    );
  },
};
