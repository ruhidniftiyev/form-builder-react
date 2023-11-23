import React, { FC } from 'react';

type Props = {
  content: string | undefined;
};

const ElementItem: FC<Props> = ({ content }) => {
  return (
    <div style={{ backgroundColor: 'lightgray', height: '100px' }}>
      <img src={content} alt="" />
    </div>
  );
};

export default ElementItem;
