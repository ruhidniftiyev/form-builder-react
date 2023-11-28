import { LuTextCursorInput } from 'react-icons/lu';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { editElementInContent } from '../store/slices/FormSlice';
import React from 'react';

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

  renderSettings: function (handleInputChange: (newPlaceholder: any) => void) {
    return (
      <>
        <input
          onChange={(e) => {
            const newPlaceholder = {...this.settings, placeholder: e.target.value };
            handleInputChange(newPlaceholder);
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
    options: ['Option 1', 'Option 2'],
  },

  renderSettings: function () {
    return (
      <>
        <input
          placeholder="Select"
          value={this.settings.label}
          onChange={(e) => (this.settings.label = e.target.value)}
        />
      </>
    );
  },

  render: function () {
    return (
      <>
        <label htmlFor="">{this.settings.label}</label>
        <select className="form-builder__form-element__select" name="" id="">
          {this.settings.options.length > 0 &&
            this.settings.options.map((option: any) => <option value={option}>{option}</option>)}
        </select>
      </>
    );
  },
};
