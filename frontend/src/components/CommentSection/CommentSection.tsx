import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import {
  CreateCommentMutation,
  GetCommentsQuery,
  useCreateCommentMutation,
  useGetCommentsQuery,
} from "../../generated/queries";
import colors from "../../utils/colors/colors";
import { getDate, getDateWithoutTimeStamp, isDefined } from "../../utils/utils";
import { BORDER_RADIUS } from "../ArticleOverview/ArticleCard";
import Button from "../Button/Button";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import InputTextarea from "../Textfield/InputTextarea";

const MAX_COMMENT_LENGTH = 500;

interface CommentSectionProps {
  client: any;
  articleId: string;
}

const CommentSection: React.FunctionComponent<CommentSectionProps> = ({
  articleId,
  client,
}) => {
  const textAreaInputRef = useRef<HTMLTextAreaElement>(null);
  const { isAuthenticated, user } = useAuth0();

  const { isLoading, data, error } = useGetCommentsQuery<
    GetCommentsQuery,
    Error
  >(client, { articleId: articleId });
  const createComment = useCreateCommentMutation<CreateCommentMutation, Error>(
    client,
    {
      onSuccess: () => {
        alert("Comment created! Please leave the page and re-visit it to see the comment");
      },
    }
  );

  const uploadComment = useCallback(() => {
    const text = textAreaInputRef?.current?.value!;
    createComment.mutate({
      comment: {
        text: text,
        authorName: user?.nickname!,
        articleId: articleId,
      },
    });
  }, [articleId, createComment, user?.nickname]);

  return (
    <Wrapper>
      <h2>Comment Section</h2>
      {isAuthenticated ? (
        <CommentInput>
          <CommentInputArea
            placeholder="Leave a nice comment"
            maxLength={MAX_COMMENT_LENGTH}
            forwardedRef={textAreaInputRef}
          />
          <UploadCommentButton onPressHandler={uploadComment}>
            Upload
          </UploadCommentButton>
        </CommentInput>
      ) : (
        <CommentInput>Log in to comment</CommentInput>
      )}

      {isDefined(error) ? (
        <div>
          ERROR
          <br />
          {error?.message}
        </div>
      ) : isLoading ? (
        <LoadingIndicator />
      ) : (
        data?.comments?.map((comment) => {
          return (
            <CommentWrapper>
              <Comment>{comment?.text}</Comment>
              <CommentMetaData>
                <UserName>User: {comment?.authorName}</UserName>
                <Date>
                  Created at:{" "}
                  {getDateWithoutTimeStamp(getDate(comment?.createdDate!))}
                </Date>
              </CommentMetaData>
            </CommentWrapper>
          );
        })
      )}
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

const UploadCommentButton = styled(Button)`
  width: 100px;
  height: 30px;
  background-color: ${colors.primary.GRAY_1};
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid;
  border-radius: ${BORDER_RADIUS};
  border-color: ${colors.primary.BLUE_5};
  background-color: ${colors.primary.BLUE_4};
  padding: 10px;
  margin-bottom: 5px;
`;

const Comment = styled.div`
  margin: 5px 0px 5px;
`;

const CommentMetaData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const UserName = styled.div``;

const Date = styled.div``;
