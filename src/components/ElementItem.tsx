import React, { FC } from 'react';

type Props = {
  icon: string | undefined;
  color: string;
  title: string;
  onClick: () => void;
};

const ElementItem: FC<Props> = ({ icon, color, title, onClick }) => {
  return (
    <div onClick={onClick} className="element-item">
      <div
        className="element-item__icon"
        style={{ backgroundColor: color, boxShadow: `0px 10px 30px -5px ${color}` }}>
        {/* <img className="element-item__icon-img" src={icon} alt="" /> */}
        {icon}
      </div>
      <p className="element-item__title">{title}</p>
    </div>
  );
};

export default ElementItem;
