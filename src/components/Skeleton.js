import React from 'react';
import { HeaderThree, List, Paragraph } from './Skeleton.styles';

function Skeleton({ loading }) {
  return (
    <List loading={loading}>
      <HeaderThree loading={loading}>{''}</HeaderThree>
      <Paragraph loading={loading}>{''}</Paragraph>
    </List>
  );
}

export default Skeleton;
