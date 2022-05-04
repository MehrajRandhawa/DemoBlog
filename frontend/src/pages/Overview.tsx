import { gql, useQuery } from "@apollo/client";
import ArticleOverview from "../components/ArticleOverview/ArticleOverview";

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

const Overview = () => {
  const { loading, data } = useQuery(ARTICLES);
  console.dir(data, { depth: Infinity });

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <ArticleOverview articles={data.articles} />
      )}
    </div>
  );
};

export default Overview;

const Articles = [
  "Article1",
  "Article2",
  "Article3",
  "Article4",
  "Article5",
  "Article6",
  "Article7",
  "Article8",
  "Article9",
];
