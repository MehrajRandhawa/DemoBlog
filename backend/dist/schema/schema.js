"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Article {\n    id: ID!\n    textHeading: String\n    textBody: String\n    authorName: String\n    comments: [Comment]\n    createdDate: String\n    lastModifiedDate: String\n  }\n\n  type Comment {\n    id: ID\n    text: String\n    authorName: String\n    article: Article\n    createdDate: String\n  }\n\n  type Query {\n    articles: [Article]\n    article(id: ID): Article\n    comments: [Comment]\n    comment(id: ID): Comment\n  }\n\n  input CreateArticleInput {\n    textHeading: String!\n    textBody: String!\n    authorName: String!\n  }\n\n  input CreateCommentInput {\n    text: String!\n    authorName: String!\n    articleId: ID!\n  }\n\n  type Mutation {\n    createArticle(article: CreateArticleInput): Article\n    createComment(comment: CreateCommentInput): Comment\n  }\n"], ["\n  type Article {\n    id: ID!\n    textHeading: String\n    textBody: String\n    authorName: String\n    comments: [Comment]\n    createdDate: String\n    lastModifiedDate: String\n  }\n\n  type Comment {\n    id: ID\n    text: String\n    authorName: String\n    article: Article\n    createdDate: String\n  }\n\n  type Query {\n    articles: [Article]\n    article(id: ID): Article\n    comments: [Comment]\n    comment(id: ID): Comment\n  }\n\n  input CreateArticleInput {\n    textHeading: String!\n    textBody: String!\n    authorName: String!\n  }\n\n  input CreateCommentInput {\n    text: String!\n    authorName: String!\n    articleId: ID!\n  }\n\n  type Mutation {\n    createArticle(article: CreateArticleInput): Article\n    createComment(comment: CreateCommentInput): Comment\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;