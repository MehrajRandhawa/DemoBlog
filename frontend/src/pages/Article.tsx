import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import CommentSection from "../components/CommentSection/CommentSection";
interface ArticleProps {}

const Article = ({}) => {
  const { id } = useParams();
  const text = `# Article 
    is
    ${id}`;
  return (
    <Wrapper>
      <StyledMarkdown>{text}</StyledMarkdown>
      <CommentSection/>
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

const StyledMarkdown = styled(ReactMarkdown)`
  width: inherit;
`;
