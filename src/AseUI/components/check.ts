import { ComponentFormart, OnEvent } from './interface';

type CheckAttributes = {
  id: string;
  text?: string;
  visible?: boolean;
  label?: string;
  selected?: boolean;
  onclick?: OnEvent;
};

export const Check = ({ id, text, selected, visible, label, onclick }: CheckAttributes): ComponentFormart => {
  return {
    tag: 'check',
    attributes: {
      id,
      text,
      label,
      visible,
      onclick,
      selected,
    },
  };
};
