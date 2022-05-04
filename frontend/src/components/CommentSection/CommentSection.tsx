import { gql } from "@apollo/client";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { CommentType } from "../../utils/types/types";
import { getDate, getDateWithoutTimeStamp } from "../../utils/utils";
import { BORDER_RADIUS } from "../ArticleOverview/ArticleCard";
import Button from "../Button/Button";
import InputTextarea from "../Textfield/InputTextarea";

const MAX_COMMENT_LENGTH = 500;

interface CommentSectionProps {
  comments: Array<CommentType>;
}

// const CREATE_COMMENT = gql`
//   mutation CreateComment($comment: String!) {
//     CreateComment(comment: $comment){
      
//     }
//   }
// `;

const CommentSection: React.FunctionComponent<CommentSectionProps> = ({
  comments,
}) => {
  const textAreaInputRef = useRef<HTMLTextAreaElement>(null);

  const uploadComment = useCallback(() => {
    console.log(textAreaInputRef?.current?.value);
  }, []);

  return (
    <Wrapper>
      <h2>Comment Section</h2>
      <CommentInput>
        <CommentInputArea
          placeholder="Leave a nice comment"
          maxLength={MAX_COMMENT_LENGTH}
          forwardedRef={textAreaInputRef}
        />
        <UploadComment onPressHandler={uploadComment}>Upload</UploadComment>
      </CommentInput>
      {comments.map((comment) => {
        //const createdAtDate = getDateWithoutTimeStamp(new Date(Number(comment.createdDate)));
        return (
          <CommentWrapper>
            <Comment>{comment.text}</Comment>
            <CommentMetaData>
              <UserName>User: {comment.authorName}</UserName>
              <Date>
                Created at:{" "}
                {getDateWithoutTimeStamp(getDate(comment.createdDate))}
              </Date>
            </CommentMetaData>
          </CommentWrapper>
        );
      })}
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
  padding-top: 10px;
`;

const CommentInputArea = styled(InputTextarea)`
  padding: 10px;
`;

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
  margin-bottom: 5px;
`;

const Comment = styled.div`
  border-color: ${colors.primary.BLUE_4};
  background-color: ${colors.primary.GRAY_2};
`;

const CommentMetaData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const UserName = styled.div``;

const Date = styled.div``;
