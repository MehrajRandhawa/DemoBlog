import styled from "styled-components";
import Background from "./../Background/background.jpg";

export const ContentCard: React.FC = () => {
  return (
    <Article>
      <Content>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <Description>
          Description asdjkjlasd oiasd iasjdoaj asidojioajd asijdoajsdij jsjdalk
          sdkjas sajdsas sapowuhu 23849 Description asdjkjlasd oiasd iasjdoaj
        </Description>
      </Content>
    </Article>
  );
};

const Article = styled.article`
  position: relative;
  height: 250px;
  width: 250px;
  background: url(${Background}) center no-repeat;
  border: solid 2px white;
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  height: 75%;
  background-color: black;
  border-radius: 20px;
  transform: translateY(50%);
  transition: 0.25s;

  :hover {
    transform: translateY(0px);
    transition: 0.25s;
  }

  :hover p {
    opacity: 1;
  }
`;

const Title = styled.h3`
  line-height: 1.5rem;
`;

const Subtitle = styled.span`
  display: block;
  margin-bottom: 20px;
`;

const Description = styled.p`
  opacity: 0;
  transition: opacity 0.5s;
`;
