import { Button, ButtonProps } from 'antd';
import React, { FC, MouseEvent } from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  type?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onClick, type }) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    // Prevent calling onClick when the type is "submit"
    if (type !== 'submit') {
      onClick();
    }
  };

  return (
    <Button className="primary-btn" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
