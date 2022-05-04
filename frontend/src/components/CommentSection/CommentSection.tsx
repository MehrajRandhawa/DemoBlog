import { gql, useMutation, useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useRef } from "react";
import styled from "styled-components";
import colors from "../../utils/colors/colors";
import { CommentType } from "../../utils/types/types";
import { getDate, getDateWithoutTimeStamp } from "../../utils/utils";
import { BORDER_RADIUS } from "../ArticleOverview/ArticleCard";
import Button from "../Button/Button";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import InputTextarea from "../Textfield/InputTextarea";

const MAX_COMMENT_LENGTH = 500;

// This is just for demo purposes. For real projects use more efficient methods to query backend data after mutation:
// https://www.apollographql.com/blog/apollo-client/caching/when-to-use-refetch-queries/

interface CommentSectionProps {
  articleId: string;
}

const CREATE_COMMENT = gql`
  mutation Mutation($comment: CreateCommentInput) {
    createComment(comment: $comment) {
      text
      authorName
      createdDate
    }
  }
`;

const GET_COMMENTS = gql`
  query Comments($id: ID) {
    comments(id: $id) {
      text
      authorName
      createdDate
    }
  }
`;

const CommentSection: React.FunctionComponent<CommentSectionProps> = ({
  articleId,
}) => {
  const textAreaInputRef = useRef<HTMLTextAreaElement>(null);
  const { isAuthenticated, user } = useAuth0();
  const [createComment] = useMutation(CREATE_COMMENT, {
    refetchQueries: [{ query: GET_COMMENTS }],
  });
  const { data, loading } = useQuery(GET_COMMENTS, {
    variables: { id: articleId },
  });

  const uploadComment = useCallback(() => {
    const text = textAreaInputRef?.current?.value;
    console.log(text);
    createComment({
      variables: {
        comment: {
          text: text,
          authorName: user?.nickname,
          articleId: articleId,
        },
      },
    });
  }, [articleId, createComment, user]);


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
          <UploadCommentButton onPressHandler={uploadComment}>Upload</UploadCommentButton>
        </CommentInput>
      ) : (
        <CommentInput>Log in to comment</CommentInput>
      )}

      {loading ? (
        <LoadingIndicator />
      ) : (
        data.comments.map(
          (comment: {
            text: string;
            authorName: string;
            createdDate: string;
          }) => {
            return (
              <CommentWrapper>
                <Comment>{comment.text}</Comment>
                <CommentMetaData>
                  <UserName>User: {comment.authorName}</UserName>
                  <Date>
                    Created at:
                    {getDateWithoutTimeStamp(getDate(comment.createdDate))}
                  </Date>
                </CommentMetaData>
              </CommentWrapper>
            );
          }
        )
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
