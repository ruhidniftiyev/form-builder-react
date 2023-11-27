import { LuTextCursorInput } from 'react-icons/lu';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';

const iconStyles = { color: 'white', width: '50px', height: '1.6em' };

export const TextInput = {
  title: 'Text input',
  name: 'input',
  description: 'Allows to write text.',
  icon: <LuTextCursorInput style={iconStyles} />,
  color: '#990066',

  settings: {
    placeholder: 'Text input',
  },

  renderSettings: function (text: string) {
    return (
      <>
        <input
          value={this.settings.placeholder}
          onChange={(e) => (this.settings.placeholder = e.target.value)}
        />
      </>
    );
  },
  render: () => (
    <>
      <input type="text" className="form-builder__form-input" />
    </>
  ),
};

export const SelectElement = {
  title: 'Select',
  name: 'select',
  description: 'Allows to choose from multiple options.',
  icon: <MdOutlinePlaylistAddCheck style={iconStyles} />,
  color: 'orange',

  settings: {
    options: ['Option 1', 'Option 2'],
  },

  render: function () {
    return (
      <>
        <select className="form-builder__form-select" name="" id="">
          {this.settings.options.length > 0 &&
            this.settings.options.map((option: any) => <option value={option}>{option}</option>)}
        </select>
      </>
    );
  },
};
