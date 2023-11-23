import React, { FC } from 'react';

type Props = {
  content: JSX.Element | string;
};

const ElementItem: FC<Props> = ({ content }) => {
  return <div>{content}</div>;
};

export default ElementItem;
