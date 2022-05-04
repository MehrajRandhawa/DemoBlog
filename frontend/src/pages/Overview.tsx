import ArticleOverview from "../components/ArticleOverview/ArticleOverview";
import { PageProps } from "../utils/types/interfaces";

const Overview: React.FunctionComponent<PageProps> = ({client}) => {
  return <ArticleOverview client={client}/>;
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
