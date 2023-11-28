import React from 'react';
import { SelectElement, TextInput } from './FormElements';
import { useAppSelector } from '../hooks/useAppSelector';
import { useFormBuilder } from '../hooks/useFormBuilder';

type Props = {};

const SettingsContent = (props: Props) => {
  const builderElements = [TextInput, SelectElement];

    const content = useAppSelector((store) => store.formSlice.content);
    const selectedElement = useAppSelector((store)=>store.formSlice.selectedElementId)

  const form = useFormBuilder({
    extensions: builderElements,
    content,
  });

  return (
    <div className="settings-content">
          <form>
              {
                  form.map((el: any) => el.id === selectedElement && (
                     el.renderSettings()
                 ) ) 
              }
      </form>
    </div>
  );
};

export default SettingsContent;
