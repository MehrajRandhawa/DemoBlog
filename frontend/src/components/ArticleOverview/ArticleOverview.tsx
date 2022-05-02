import styled from "styled-components";
import { ArticleCard } from "./ArticleCard";

interface ArticleOverviewProps {
  articles?: Array<string>;
}

const ArticleOverview: React.FunctionComponent<ArticleOverviewProps> = ({
  articles,
}) => {
  const firstThreeArticles = articles?.slice(0, 3);
  const remainingArtivles = articles?.slice(3);
  return (
    <SWrapper>
      {firstThreeArticles?.map((article) => (
        <ArticleCard text={article} />
      ))}
      <TitleCard>Title</TitleCard>

      {remainingArtivles?.map((article) => (
        <ArticleCard text={article} />
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

  border: solid;
`;

const TitleCard = styled.div`
  border: solid;

  height: 150px;

  margin: 20px;
  width: 100%;
`;
