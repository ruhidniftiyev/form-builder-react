import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <button>
        <FaCheck className="header__check" />
        SAVE FORM
      </button>
    </div>
  );
};

export default Header;
