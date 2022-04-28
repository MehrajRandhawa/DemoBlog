export type NonEmptyTuple<T, U> = [T, U];

export type NonEmptyArray<T> = [T, ...T[]];

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}