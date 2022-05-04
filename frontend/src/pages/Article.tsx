import { useParams } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import styled from "styled-components";
import CommentSection from "../components/CommentSection/CommentSection";
import { gql, useQuery } from "@apollo/client";

const ARTICLE = gql`
  query Article($id: ID!) {
    article(id: $id) {
      id
      textHeading
      textBody
      authorName
      createdDate
      lastModifiedDate
    }
  }
`;

const Article = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(ARTICLE, { variables: { id: id } });

  return (
    <Wrapper>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <StyledMarkdown options={{ forceBlock: true }} children={data.article.textBody} />
          <CommentSection  articleId={id!}/>
        </div>
      )}
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const StyledMarkdown = styled(Markdown)`
  width: inherit;
  margin-bottom: 20px;
`;
