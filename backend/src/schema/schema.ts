import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Article {
    id: ID!
    textHeading: String!
    textBody: String!
    author: User!
    comment: [Comment]
    createdDate: String!
    lastModifiedDate: String!
  }
  
  type User {
    id: ID!
    name: String!
    articles: [Article]
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    article: Article!
    createdDate: String!
  }

  type Query {
    articles: [Article]
    article(id: ID): Article
    comments: [Comment]
    comment(id: ID): Comment
  }

  input CreateArticleInput {
    textHeading: String
    textBody: String
    authorId: ID
  }

  input CreateComment {
    comment: String
    authorId: ID
    articleId: ID
  }

  type Mutation {
    createArticle(article) : Article
    createComment(comment) : Comment
  }
`;

export default typeDefs;
