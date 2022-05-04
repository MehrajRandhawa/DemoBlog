import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArticleType } from "../../utils/types/types";
import { isDefined } from "../../utils/utils";
import { ArticleCard } from "./ArticleCard";
import { TitleCard } from "./TitleCard";

const CARDS_PER_ROW = 3;

interface ArticleOverviewProps {
  articles: Array<ArticleType>;
}

const ArticleOverview: React.FunctionComponent<ArticleOverviewProps> = ({
  articles,
}) => {
  const numberArticles: number = articles.length;
  let firstRowArticles;
  let remainingArticles;

  const sortedArticles = articles.map(element => element).sort((a,b) => Number(a.id) - Number(b.id));

  if (numberArticles < CARDS_PER_ROW) {
    firstRowArticles = sortedArticles?.slice(0, numberArticles);
  } else {
    firstRowArticles = sortedArticles?.slice(0, CARDS_PER_ROW);
    remainingArticles = sortedArticles?.slice(CARDS_PER_ROW);
  }

  return (
    <SWrapper>
      {isDefined(firstRowArticles) &&
        firstRowArticles?.map((article) => (
          <StyledLink to={`/article/${article.id}`}>
            <ArticleCard
              heading={article.textHeading}
              authorName={article.authorName}
              lastModifiedAtDate={article.lastModifiedDate}
              createdAtDate={article.createdDate}
            />
          </StyledLink>
        ))}
      <TitleCard title="Demo React Project" />

      {isDefined(remainingArticles) &&
        remainingArticles?.map((article) => (
          <StyledLink to={`/article/${article.id}`}>
            <ArticleCard
              heading={article.textHeading}
              authorName={article.authorName}
              lastModifiedAtDate={article.lastModifiedDate}
              createdAtDate={article.createdDate}
            />
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
