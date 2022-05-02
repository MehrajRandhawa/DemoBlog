import styled from "styled-components";
import colors, { getRandomColor } from "../../utils/colors/colors";
import SubtlePrisma from "../Background/SubtlePrisma";
import UserIcon from "../Icons/UserIcon";

interface ArticleCardProps {
  text: string;
}

export const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  text,
}) => {
  const randomColor = getRandomColor();
  console.log("color for SublePrisma: ", randomColor);
  return (
    <SWrapper>
      <Picture>
        <SubtlePrisma
          prismaHeight="50px"
          prismaWidth="75px"
          stopFill={randomColor}
        />
      </Picture>
      <HeadingWrapper>
        {text} hashdkaskdjskajd lkasjdkljsak ljdkl saj
      </HeadingWrapper>
      <CardMetaDataWrapper>
        <AuthorWrapper>
          <SUserIcon />
          <AuthorName>Author Name</AuthorName>
        </AuthorWrapper>
        <DateWrapper>
          <DateText>Created at: </DateText>
          <DateText>Last modified at:</DateText>
        </DateWrapper>
      </CardMetaDataWrapper>
    </SWrapper>
  );
};

const BORDER_RADIUS = "10px";

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.primary.BLUE_4};
  width: 30%;
  border: solid;
  border-color: ${colors.primary.BLUE_5};
  border-radius: ${BORDER_RADIUS};
  margin: 10px;
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

const Thumbnail = styled(SubtlePrisma)`
  z-index: -1;
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
  justify-content: center;
  padding: 5px;
`;

const DateWrapper = styled.div``;

const DateText = styled.div`
  margin: 2px;
`;
