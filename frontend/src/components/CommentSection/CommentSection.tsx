import { useCallback, useRef } from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { BORDER_RADIUS } from "../ArticleOverview/ArticleCard";
import Button from "../Button/Button";
import InputTextarea from "../Textfield/InputTextarea";

const MAX_COMMENT_LENGTH = 250;

const CommentSection: React.FunctionComponent = () => {
  const textAreaInputRef = useRef<HTMLTextAreaElement>(null);

  const uploadComment = useCallback(()=> {console.log('Upload new Comment')}, []);
  return (
    <Wrapper>
      <h2>Comment Section</h2>
      <CommentInput>
        <CommentInputArea
          placeholder="placeHolder"
          maxLength={MAX_COMMENT_LENGTH}
          forwardedRef={textAreaInputRef}
        />
        <UploadComment onPressHandler={uploadComment}>Upload</UploadComment>
      </CommentInput>
      <CommentWrapper>
          <Comment>Comment</Comment>
          <CommentMetaData>
              <UserName>User</UserName>
              <Date>01.01.22</Date>
          </CommentMetaData>
      </CommentWrapper>
    </Wrapper>
  );
};

export default CommentSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CommentInputArea = styled(InputTextarea)``;

const UploadComment = styled(Button)`
  width: 100px;
  height: 30px;
  background-color: ${colors.primary.GRAY_1};
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: solid;
    border-radius: ${BORDER_RADIUS};
    border-color: ${colors.primary.BLUE_4};
    padding: 5px;
`;

const Comment = styled.div`

`;

const CommentMetaData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`;

const UserName = styled.div`
`;

const Date = styled.div``;
