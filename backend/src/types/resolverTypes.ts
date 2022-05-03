export namespace ResolverTypes {
  export type Article = {
    id: string;
    textHeading: string;
    textBody: string;
    authorName: string;
    createdDate: string;
    lastModifiedDate: string;
  };

  export type Comment = {
    id: string;
    text: string;
    authorName: string;
    article: Article;
    createdDate: string;
  };

  export type CreateArticleInput = {
    article: {
      textHeading: string;
      textBody: string;
      authorName: string;
    };
  };

  export type CreateCommentInput = {
    comment: {
      text: string;
      articleId: string;
      authorName: string;
    };
  };

  export type ArgumentId = {
    id: string;
  };
}
