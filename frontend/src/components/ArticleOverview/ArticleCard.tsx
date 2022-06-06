import styled from "styled-components";
import colors, { getRandomColor } from "../../utils/colors/colors";
import { getDate } from "../../utils/utils";
import SubtlePrisma from "../Background/SubtlePrisma";
import UserIcon from "../Icons/UserIcon";

interface ArticleCardProps {
  heading: string;
  authorName: string;
  createdAtDate: string;
  lastModifiedAtDate: string;
}

export const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  heading,
  authorName,
  createdAtDate,
  lastModifiedAtDate,
}) => {
  const randomColor = getRandomColor();

  const createdAt = getDate(createdAtDate).toUTCString();
  const lastModifiedAt = getDate(lastModifiedAtDate).toUTCString();

  return (
    <SWrapper>
      <Picture>
        <SubtlePrisma
          prismaHeight="50px"
          prismaWidth="75px"
          stopFill={randomColor}
        />
      </Picture>
      <HeadingWrapper>{heading}</HeadingWrapper>
      <CardMetaDataWrapper>
        <AuthorWrapper>
          <SUserIcon />
          <AuthorName>{authorName}</AuthorName>
        </AuthorWrapper>
        <DateWrapper>
          <DateText>{`Created at: ${createdAt}`}</DateText>
          <DateText>{`Last modified at: ${lastModifiedAt}`}</DateText>
        </DateWrapper>
      </CardMetaDataWrapper>
    </SWrapper>
  );
};

export const BORDER_RADIUS = "10px";

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.primary.BLUE_4};
  border: solid;
  border-color: ${colors.primary.GRAY_3};
  color: white;
  margin: 5px;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 5px ${colors.primary.BLUE_5};
    cursor: pointer;
  }
`;

const Picture = styled.div`
  max-height: 40%;
  margin: 5px;
`;

const HeadingWrapper = styled.h2`
  margin: 5px;
`;

const CardMetaDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SUserIcon = styled(UserIcon)`
  margin: 5px;
`;

const AuthorName = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 10px;
`;

const DateText = styled.div`
  margin: 2px;
`;
