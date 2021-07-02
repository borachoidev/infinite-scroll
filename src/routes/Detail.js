import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useDetail from '../hooks/useDetail';
import {
  Article,
  Button,
  HeaderOne,
  Paragraph,
  Section,
} from './Detail.sytles';

function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useDetail(id);
  return (
    <Section>
      <Article>
        <HeaderOne loading={loading}>{data.title}</HeaderOne>
        <Paragraph loading={loading}>{data.content}</Paragraph>
        {error && 'Error!'}
      </Article>
      <Button type="button" onClick={() => history.push('/')}>
        뒤로가기
      </Button>
    </Section>
  );
}

export default Detail;
