import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Article {
    id: ID!
    textHeading: String
    textBody: String
    authorName: String
    comments: [Comment]
    createdDate: String
    lastModifiedDate: String
  }

  type Comment {
    id: ID
    text: String
    authorName: String
    article: Article
    createdDate: String
  }

  type Query {
    articles: [Article]
    article(id: ID): Article
    comments(id: ID): [Comment]
  }

  input CreateArticleInput {
    textHeading: String!
    textBody: String!
    authorName: String!
  }

  input CreateCommentInput {
    text: String!
    authorName: String!
    articleId: ID!
  }

  type Mutation {
    createArticle(article: CreateArticleInput): Article
    createComment(comment: CreateCommentInput): Comment
  }
`;

export default typeDefs;
