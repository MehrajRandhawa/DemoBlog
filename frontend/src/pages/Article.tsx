import { useParams } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import styled from "styled-components";
import CommentSection from "../components/CommentSection/CommentSection";

import { PageProps } from "../utils/types/interfaces";
import { GetArticleQuery, useGetArticleQuery } from "../generated/queries";



const Article: React.FunctionComponent<PageProps> = ({client}) => {
  const { id } = useParams();
  const { isLoading, data } = useGetArticleQuery<GetArticleQuery, Error>(client, {articleId: id});

  return (
    <Wrapper>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <StyledMarkdown options={{ forceBlock: true }} children={data?.article?.textBody} />
          <CommentSection client={client} articleId={id!}/>
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
