import { LuTextCursorInput } from 'react-icons/lu';

export const TextInput = {
  title: 'input',
  description: 'Allows to write text.',
    icon: <LuTextCursorInput />,
  
    settings: {

    },

    render: () => {
        <>
            <input type="text" />
        </>
    }
};
