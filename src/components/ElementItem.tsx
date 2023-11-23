import React, { FC } from 'react';

type Props = {
  content: string | undefined;
  color: string;
};

const ElementItem: FC<Props> = ({ content, color }) => {
  return (
    <div
      className="element-item"
      style={{ backgroundColor: color, boxShadow: `0px 10px 30px -5px ${color}` }}>
      <img className="element-item__content-img" src={content} alt="" />
    </div>
  );
};

export default ElementItem;
