import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation Mutation($comment: CreateCommentInput) {
    createComment(comment: $comment) {
      text
      authorName
      createdDate
    }
  }
`;