import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import CommentSection from "../components/CommentSection/CommentSection";

import { PageProps } from "../utils/types/interfaces";
import { GetArticleQuery, useGetArticleQuery } from "../generated/queries";
import { isDefined } from "../utils/utils";

const Article: React.FunctionComponent<PageProps> = ({ client }) => {
  const { id } = useParams();
  const { isLoading, data, error } = useGetArticleQuery<GetArticleQuery, Error>(
    client,
    { articleId: id }
  );

  return (
    <Wrapper>
      {isDefined(error) ? (
        <div>
          ERROR
          <br />
          {error?.message}
        </div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : (
        <Content>
          <Heading>{data?.article?.textHeading}</Heading>
          <StyledMarkdown
            options={{ forceBlock: true }}
            children={data?.article?.textBody}
          />
          <CommentSection client={client} articleId={id!} />
        </Content>
      )}
    </Wrapper>
  );
};

export default Article;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`;

const StyledMarkdown = styled(Markdown)`
  width: inherit;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
