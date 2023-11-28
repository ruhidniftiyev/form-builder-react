import React, { useEffect, useState } from 'react';
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

  const handleInputChange = (newPlaceholder: any) => {
    console.log('Изменение в TextInput:', newPlaceholder);
    dispatch(editElementInContent(newPlaceholder));
  };

  return (
    <div className="settings-content">
      <form>
        {form.map((el: any) => {
          return el.id === selectedElement && el.renderSettings(handleInputChange);
        })}
      </form>
    </div>
  );
};

export default SettingsContent;
