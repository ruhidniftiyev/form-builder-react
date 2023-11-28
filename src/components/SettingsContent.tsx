import React, { useEffect } from 'react';
import { SelectElement, TextInput } from './FormElements';
import { useAppSelector } from '../hooks/useAppSelector';
import { useFormBuilder } from '../hooks/useFormBuilder';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { editElementInContent } from '../store/slices/FormSlice';

type Props = {};

const SettingsContent = (props: Props) => {
  const builderElements = [TextInput, SelectElement];

  const dispatch = useAppDispatch();

  const content = useAppSelector((store) => store.formSlice.content);
  const selectedElement = useAppSelector((store) => store.formSlice.selectedElementId);

  const form = useFormBuilder({
    extensions: builderElements,
    content,
  });

  return (
    <div className="settings-content">
      <form>{form.map((el: any) => el.id === selectedElement && el.renderSettings())}</form>
    </div>
  );
};

export default SettingsContent;
