import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  authorName?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastModifiedDate?: Maybe<Scalars['String']>;
  textBody?: Maybe<Scalars['String']>;
  textHeading?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  article?: Maybe<Article>;
  authorName?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type CreateArticleInput = {
  authorName: Scalars['String'];
  textBody: Scalars['String'];
  textHeading: Scalars['String'];
};

export type CreateCommentInput = {
  articleId: Scalars['ID'];
  authorName: Scalars['String'];
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<Article>;
  createComment?: Maybe<Comment>;
};


export type MutationCreateArticleArgs = {
  article?: InputMaybe<CreateArticleInput>;
};


export type MutationCreateCommentArgs = {
  comment?: InputMaybe<CreateCommentInput>;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommentsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateArticleMutationVariables = Exact<{
  article?: InputMaybe<CreateArticleInput>;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle?: { __typename?: 'Article', textHeading?: string | null, textBody?: string | null, authorName?: string | null, createdDate?: string | null, lastModifiedDate?: string | null } | null };

export type CreateCommentMutationVariables = Exact<{
  comment?: InputMaybe<CreateCommentInput>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', text?: string | null, authorName?: string | null, createdDate?: string | null } | null };

export type GetArticleQueryVariables = Exact<{
  articleId?: InputMaybe<Scalars['ID']>;
}>;


export type GetArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', textHeading?: string | null, textBody?: string | null, authorName?: string | null, createdDate?: string | null, lastModifiedDate?: string | null, comments?: Array<{ __typename?: 'Comment', text?: string | null, authorName?: string | null, createdDate?: string | null } | null> | null } | null };

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', textHeading?: string | null, textBody?: string | null, authorName?: string | null, createdDate?: string | null, lastModifiedDate?: string | null, id: string, comments?: Array<{ __typename?: 'Comment', text?: string | null, authorName?: string | null, createdDate?: string | null } | null> | null } | null> | null };

export type GetCommentsQueryVariables = Exact<{
  articleId?: InputMaybe<Scalars['ID']>;
}>;


export type GetCommentsQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', text?: string | null, authorName?: string | null, createdDate?: string | null } | null> | null };


export const CreateArticleDocument = `
    mutation CreateArticle($article: CreateArticleInput) {
  createArticle(article: $article) {
    textHeading
    textBody
    authorName
    createdDate
    lastModifiedDate
  }
}
    `;
export const useCreateArticleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateArticleMutation, TError, CreateArticleMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateArticleMutation, TError, CreateArticleMutationVariables, TContext>(
      ['CreateArticle'],
      (variables?: CreateArticleMutationVariables) => fetcher<CreateArticleMutation, CreateArticleMutationVariables>(client, CreateArticleDocument, variables, headers)(),
      options
    );
export const CreateCommentDocument = `
    mutation CreateComment($comment: CreateCommentInput) {
  createComment(comment: $comment) {
    text
    authorName
    createdDate
  }
}
    `;
export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      ['CreateComment'],
      (variables?: CreateCommentMutationVariables) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables, headers)(),
      options
    );
export const GetArticleDocument = `
    query GetArticle($articleId: ID) {
  article(id: $articleId) {
    textHeading
    textBody
    authorName
    comments {
      text
      authorName
      createdDate
    }
    createdDate
    lastModifiedDate
  }
}
    `;
export const useGetArticleQuery = <
      TData = GetArticleQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetArticleQueryVariables,
      options?: UseQueryOptions<GetArticleQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetArticleQuery, TError, TData>(
      variables === undefined ? ['GetArticle'] : ['GetArticle', variables],
      fetcher<GetArticleQuery, GetArticleQueryVariables>(client, GetArticleDocument, variables, headers),
      options
    );
export const GetArticlesDocument = `
    query GetArticles {
  articles {
    textHeading
    textBody
    authorName
    comments {
      text
      authorName
      createdDate
    }
    createdDate
    lastModifiedDate
    id
  }
}
    `;
export const useGetArticlesQuery = <
      TData = GetArticlesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetArticlesQueryVariables,
      options?: UseQueryOptions<GetArticlesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetArticlesQuery, TError, TData>(
      variables === undefined ? ['GetArticles'] : ['GetArticles', variables],
      fetcher<GetArticlesQuery, GetArticlesQueryVariables>(client, GetArticlesDocument, variables, headers),
      options
    );
export const GetCommentsDocument = `
    query GetComments($articleId: ID) {
  comments(id: $articleId) {
    text
    authorName
    createdDate
  }
}
    `;
export const useGetCommentsQuery = <
      TData = GetCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCommentsQueryVariables,
      options?: UseQueryOptions<GetCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentsQuery, TError, TData>(
      variables === undefined ? ['GetComments'] : ['GetComments', variables],
      fetcher<GetCommentsQuery, GetCommentsQueryVariables>(client, GetCommentsDocument, variables, headers),
      options
    );