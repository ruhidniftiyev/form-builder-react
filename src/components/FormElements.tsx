import { LuTextCursorInput } from 'react-icons/lu';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';

const iconStyles = { color: 'white', width: '50px', height: '1.6em' };

export const TextInput = {
  title: 'Text input',
  name: 'title',
  description: 'Allows to write text.',
  icon: <LuTextCursorInput style={iconStyles} />,
  color: '#990066',

  settings: {},

  render: () => (
    <>
      <input type="text" />
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
    options: [],
  },

  render: function () {
    return (
      <>
        <select name="" id="">
          {this.settings.options.length > 0 &&
            this.settings.options.map((option: any) => <option value={option}>{option}</option>)}
        </select>
      </>
    );
  },
};
