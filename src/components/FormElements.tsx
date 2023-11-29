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
  IRadioButtonsSettings,
  IRadioChoices,
  ITextAreaSettings,
} from '../models/IFormElement';

const iconStyles = { color: 'white', width: '50px', height: '1.6em' };

const TextInput = {
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

const SelectElement = {
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

const CheckBoxElement = {
  title: 'Checkbox',
  name: 'checkbox',
  description: 'Allows to check...',
  icon: <FaRegSquareCheck style={iconStyles} />,
  color: 'blue',

  settings: {
    label: 'Checkbox',
    value: 'Check',
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
    choices: [
      {
        id: uuid4(),
        choice: 'Choice 1',
      },
      {
        id: uuid4(),
        choice: 'Choice 2',
      },
    ],
  },

  renderSettings: function (
    settings: IRadioButtonsSettings,
    handleRadioChange: (newSettings: IRadioButtonsSettings) => void,
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
            handleRadioChange(newSettings);
          }}
        />
        <label htmlFor={settings.label}>Choices</label>
        {settings.choices?.map((item: IRadioChoices) => (
          <div className="settings-content__form-select__option">
            <input
              className="settings-content__form-select__option-input"
              key={item.id}
              type="text"
              value={item.choice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const updateChoices = settings.choices?.map((el: IRadioChoices) =>
                  el.id === item.id ? { ...el, choice: e.target.value } : el,
                );
                const newSettings = {
                  ...settings,
                  choices: updateChoices,
                };
                handleRadioChange(newSettings);
              }}
            />
            <TiDelete
              onClick={() => {
                const newSettings = {
                  ...settings,
                  choices: settings.choices?.filter((el: IRadioChoices) => el.id !== item.id),
                };
                handleRadioChange(newSettings);
              }}
              className="settings-content__form-select__option-delete"
            />
          </div>
        ))}
        <button
          onClick={() => {
            const newSettings = {
              ...settings,
              choices: settings.choices && [...settings.choices, { id: uuid4(), choice: '' }],
            };
            handleRadioChange(newSettings);
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
        <label htmlFor={this.settings.label}>{this.settings.label}</label>
        <div className="form-builder__form-element-radio">
          {this.settings.choices?.map((choiceElement: IRadioChoices) => (
            <div className="form-builder__form-element-radio__block">
              <input
                type="radio"
                value={choiceElement.choice}
                name={this.settings.label}
                className="form-builder__form-element-radio__block-input"
              />
              <label htmlFor={choiceElement.choice}>{choiceElement.choice}</label>
            </div>
          ))}
        </div>
      </>
    );
  },
};

const TextAreaElement = {
  title: 'Textarea',
  name: 'textarea',
  description: 'Allows to write text.',
  icon: <BsTextareaResize style={iconStyles} />,
  color: 'gold',

  settings: {
    label: 'Text area',
    // text: '',
  },

  renderSettings: function (
    settings: ITextAreaSettings,
    handleTextAreaChange: (newSettings: ITextAreaSettings) => void,
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
            handleTextAreaChange(newSettings);
          }}
        />
        {/* <label htmlFor={settings.text}>Text</label>
        <input
          type="text"
          placeholder="Max 200 symbol"
          className="settings-content__form-input"
          value={settings.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newSettings = { ...settings, text: e.target.value };
            handleTextAreaChange(newSettings);
          }}
        /> */}
      </>
    );
  },
  render: function () {
    return (
      <>
        <label htmlFor={this.settings.label}>{this.settings.label}</label>
        <textarea rows={10} className="form-builder__form-element__textarea"></textarea>
      </>
    );
  },
};

export const builderElements = [
  TextInput,
  SelectElement,
  CheckBoxElement,
  RadioButtonsElement,
  TextAreaElement,
];
