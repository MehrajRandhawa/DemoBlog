export type NonEmptyTuple<T, U> = [T, U];

export type NonEmptyArray<T> = [T, ...T[]];

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type ArticleType = {
  id: string;
  textHeading: string;
  textBody: string;
  authorName: string;
  createdDate: string;
  lastModifiedDate: string;
};

export type CommentType = {
  id: string;
  text: string;
  authorName: string;
  createdDate: string;
};