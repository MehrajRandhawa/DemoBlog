import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArticleCard } from "./ArticleCard";
import { TitleCard } from "./TitleCard";

const CARDS_PER_ROW = 4;

interface ArticleOverviewProps {
  articles?: Array<string>;
}

const ArticleOverview: React.FunctionComponent<ArticleOverviewProps> = ({
  articles,
}) => {
  const firstRowArticles = articles?.slice(0, CARDS_PER_ROW);
  const remainingArticles = articles?.slice(CARDS_PER_ROW);

  return (
    <SWrapper>
      {firstRowArticles?.map((article) => (
        <StyledLink to={`/article/${article}`}>
          <ArticleCard text={article} />{" "}
        </StyledLink>
      ))}
      <TitleCard title="Demo React Project" />

      {remainingArticles?.map((article) => (
        <StyledLink to={`/article/${article}`}>
          <ArticleCard text={article} />
        </StyledLink>
      ))}
    </SWrapper>
  );
};

export default ArticleOverview;

const SWrapper = styled.div`
  width: 100%;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  width: ${90 / CARDS_PER_ROW}%;
  text-decoration: none;     
  color: white;
`;
