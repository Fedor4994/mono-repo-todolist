import React from 'react';
import * as Styled from './toggler.styled';

const Toggler = ({
  checked,
  onChange
}: {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Styled.Label>
    <Styled.Input checked={checked} type="checkbox" onChange={onChange} />
    <Styled.Switch />
  </Styled.Label>
);

export default Toggler;
