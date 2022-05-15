import { Link } from "react-router-dom";
import styled from "styled-components";
import { GetArticlesQuery, useGetArticlesQuery } from "../../generated/queries";
import { ArticleType } from "../../utils/types/types";
import { isDefined } from "../../utils/utils";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { ArticleCard } from "./ArticleCard";
import { TitleCard } from "./TitleCard";
import ErrorScreen from "../Error/ErrorScreen";

const CARDS_PER_ROW = 3;

interface ArticleOverviewProps {
  client: any;
}

const ArticleOverview: React.FunctionComponent<ArticleOverviewProps> = ({
  client,
}) => {
  const { isLoading, data, error } = useGetArticlesQuery<
    GetArticlesQuery,
    Error
  >(client, {});

  const articles = data?.articles as Array<ArticleType>;

  let firstRowArticles;
  let remainingArticles;

  if (!isLoading) {
    const numberArticles: number = articles.length;

    const sortedArticles = articles
      .map((element: any) => element)
      .sort(
        (a: Partial<ArticleType>, b: Partial<ArticleType>) =>
          Number(a.id) - Number(b.id)
      );

    if (numberArticles < CARDS_PER_ROW) {
      firstRowArticles = sortedArticles.slice(0, numberArticles);
    } else {
      firstRowArticles = sortedArticles.slice(0, CARDS_PER_ROW);
      remainingArticles = sortedArticles.slice(CARDS_PER_ROW);
    }
  }

  return isDefined(error) ? (
    <ErrorScreen error={error} />
  ) : isLoading ? (
    <LoadingIndicator />
  ) : (
    <SWrapper>
      {isDefined(firstRowArticles) &&
        firstRowArticles.map((article: ArticleType) => (
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
        remainingArticles.map((article: ArticleType) => (
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
