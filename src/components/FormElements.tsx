import { LuTextCursorInput } from 'react-icons/lu';
import { MdOutlinePlaylistAddCheck } from 'react-icons/md';

export const TextInput = {
  title: 'input',
  description: 'Allows to write text.',
  icon: <LuTextCursorInput />,

  settings: {},

  render: () => {
    <>
      <input type="text" />
    </>;
  },
};

export const SelectElement = {
  title: 'input',
  description: 'Allows to write text.',
  icon: <MdOutlinePlaylistAddCheck />,

  settings: {
    options: [],
  },

  render: function () {
    <>
      <select name="" id="">
        {this.settings.options.length > 0 &&
          this.settings.options.map((option: any) => <option value={option}>{option}</option>)}
      </select>
    </>;
  },
};
