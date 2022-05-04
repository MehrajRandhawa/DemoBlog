import { PrismaClient } from "@prisma/client";
import { ResolverTypes } from "../types/resolverTypes";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    articles: async () => {
      const articles = await prisma.article.findMany({
        include: { comments: true },
      });
      return articles;
    },
    article: async (_: unknown, args: ResolverTypes.ArgumentId) => {
      const { id } = args;
      const article = await prisma.article.findUnique({
        where: { id: Number(id) },
        include: {
          comments: true,
        },
      });
      return article;
    },
    comments: async (_: unknown, args: ResolverTypes.ArgumentId) => {
      const { id } = args;
      const comments = await prisma.comment.findMany({
        where: { articleId: Number(id) },
      });

      return comments;
    }
  },
  Mutation: {
    createArticle: async (
      _: unknown,
      args: ResolverTypes.CreateArticleInput
    ) => {
      const { article } = args;
      const { textHeading, textBody, authorName } = article;

      const createdArticle = await prisma.article.create({
        data: {
          textHeading: textHeading,
          textBody: textBody,
          authorName: authorName,
        },
      });

      return createdArticle;
    },
    createComment: async (
      _: unknown,
      args: ResolverTypes.CreateCommentInput
    ) => {
      const { comment } = args;
      const { text, articleId, authorName } = comment;

      const createdComment = await prisma.comment.create({
        data: {
          text: text,
          articleId: Number(articleId),
          authorName: authorName,
        },
      });

      return createdComment;
    },
  },
};

export default resolvers;
