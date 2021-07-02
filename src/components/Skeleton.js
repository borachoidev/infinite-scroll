import React from 'react';
import { HeaderThree, List, Paragraph } from './Skeleton.styles';

function Skeleton({ loading }) {
  return (
    <List loading={loading ? 'true' : ''}>
      <HeaderThree loading={loading ? 'true' : ''}>{''}</HeaderThree>
      <Paragraph loading={loading ? 'true' : ''}>{''}</Paragraph>
    </List>
  );
}

export default Skeleton;
