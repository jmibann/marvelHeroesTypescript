import React from 'react';

import { LoadingBox, Spinner } from './styles';

type LoadingProps = {
  size?: 'small' | 'medium' | 'large';
  text: string;
};

const LoadingSpinner: React.FC<LoadingProps> = ({ size = "small", text }) => {

  const sizes = {
    small: 20,
    medium: 40,
    large: 60,
  }

  return (
    <LoadingBox>
      {text}
      <Spinner size={sizes[size]} />
    </LoadingBox>
  )
};

export default LoadingSpinner;