import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../context/Store';
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
  const { postType } = useContext(SearchContext);
  const { loading, data, error } = useDetail(id, postType);

  return (
    <Section>
      <Article>
        <HeaderOne loading={loading ? 'true' : ''}>{data.title}</HeaderOne>
        <Paragraph loading={loading ? 'true' : ''}>{data.content}</Paragraph>
        {error && 'Error!'}
      </Article>
      <Button type="button" onClick={() => history.goBack()}>
        뒤로가기
      </Button>
    </Section>
  );
}

export default Detail;
