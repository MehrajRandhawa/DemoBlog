import ArticleOverview from "../components/ArticleOverview/ArticleOverview";
import { PageProps } from "../utils/types/interfaces";

const Overview: React.FunctionComponent<PageProps> = ({ client }) => {
  return <ArticleOverview client={client} />;
};

export default Overview;
