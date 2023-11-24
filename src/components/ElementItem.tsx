import React, { FC } from 'react';

type Props = {
  content: string | undefined;
  color: string;
  title: string;
};

const ElementItem: FC<Props> = ({ content, color, title }) => {
  return (
    <div className="element-item">
      <div
        className="element-item__icon"
        style={{ backgroundColor: color, boxShadow: `0px 10px 30px -5px ${color}` }}>
        <img className="element-item__icon-img" src={content} alt="" />
      </div>
      <p className="element-item__title">{title}</p>
    </div>
  );
};

export default ElementItem;
