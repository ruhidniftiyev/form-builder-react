import React from 'react';
import { CheckBoxElement, RadioButtonsElement, SelectElement, TextInput } from './FormElements';
import { useAppSelector } from '../hooks/useAppSelector';
import { useFormBuilder } from '../hooks/useFormBuilder';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { editElementInContent } from '../store/slices/FormSlice';
import { SettingsType } from '../models/IFormElement';
import { IBuilderElement } from '../models/IBuildingElements';

const SettingsContent = () => {
  const builderElements = [TextInput, SelectElement, CheckBoxElement, RadioButtonsElement];

  const dispatch = useAppDispatch();

  const content = useAppSelector((store) => store.formSlice.content);
  const selectedElement = useAppSelector((store) => store.formSlice.selectedElementId);

  const form = useFormBuilder({
    extensions: builderElements,
    content,
  });

  const handleInputChange = (NewSettingFromElements: SettingsType) => {
    dispatch(editElementInContent(NewSettingFromElements));
  };

  const defaultSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="settings-content">
      <form onSubmit={defaultSubmit} className="settings-content__form">
        {form.map((el: IBuilderElement) => {
          return el.id === selectedElement && el.renderSettings(el.settings, handleInputChange);
        })}
      </form>
    </div>
  );
};

export default SettingsContent;
