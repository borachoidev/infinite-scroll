import React from 'react';
import { useParams } from 'react-router';
import useDetail from '../hooks/useDetail';
import {
  Article,
  Button,
  HeaderOne,
  Paragraph,
  Section,
} from './Detail.sytles';


function Detail({ history, location }) {

  const { type } = useParams();
  const id = location.search.split('=')[1];
  const { loading, data, error } = useDetail(id, type);

  return (
    <Section>
      <Article>
        <HeaderOne loading={loading ? 'true' : ''}>{data.title}</HeaderOne>
        <Paragraph loading={loading ? 'true' : ''}>{data.content}</Paragraph>
        {error && 'error'}
      </Article>
      <Button type="button" onClick={() => history.goBack()}>
        뒤로가기
      </Button>
    </Section>
  );
}

export default Detail;
