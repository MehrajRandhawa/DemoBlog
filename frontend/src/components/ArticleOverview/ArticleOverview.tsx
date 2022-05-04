import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArticleType } from "../../utils/types/types";
import { isDefined } from "../../utils/utils";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import { ArticleCard } from "./ArticleCard";
import { TitleCard } from "./TitleCard";

const CARDS_PER_ROW = 3;

const ARTICLES = gql`
  query Articles {
    articles {
      id
      textHeading
      authorName
      createdDate
      lastModifiedDate
    }
  }
`;

interface ArticleOverviewProps {}

const ArticleOverview: React.FunctionComponent<ArticleOverviewProps> = () => {
  const { loading, data } = useQuery(ARTICLES);
  console.log(data);

  let firstRowArticles;
  let remainingArticles;

  if(!loading){
    const numberArticles: number = data.articles.length;
    console.log(numberArticles)
    const sortedArticles = data.articles.map((element: any) => element).sort(
      (a: Partial<ArticleType>, b: Partial<ArticleType>) => Number(a.id) - Number(b.id)
    );
      console.log(sortedArticles)
    if (numberArticles < CARDS_PER_ROW) {
      firstRowArticles = sortedArticles?.slice(0, numberArticles);
    } else {
      firstRowArticles = sortedArticles?.slice(0, CARDS_PER_ROW);
      remainingArticles = sortedArticles?.slice(CARDS_PER_ROW);
    }
  
  }

  return loading ? (
    <LoadingIndicator />
  ) : (
    <SWrapper>
      {isDefined(firstRowArticles) &&
        firstRowArticles?.map((article: ArticleType) => (
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
        remainingArticles?.map((article: ArticleType) => (
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
