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

export const GET_COMMENTS = gql`
  query Comments($id: ID) {
    comments(id: $id) {
      text
      authorName
      createdDate
    }
  }
`;