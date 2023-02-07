import React from 'react';

const Button = ({ children, handleClick, varian }) => {
  if (varian === 'blue') {
    return (
      <button onClick={handleClick} style={{ background: 'blue', color: 'white' }}>
        {children}
      </button>
    );
  } else if (varian === 'red') {
    return (
      <button onClick={handleClick} style={{ background: 'red', color: 'white' }}>
        {children}
      </button>
    );
  }
};

export default Button;
