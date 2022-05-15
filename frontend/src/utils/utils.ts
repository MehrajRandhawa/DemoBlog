export function isDefined<T>(argument: T | undefined| null): argument is T {
  return argument !== null && argument !== undefined ? true : false;
}

export function getDateWithoutTimeStamp(date: Date): string {
  return date.toISOString().toString().split("T")[0];
}

export function getDate(date: string): Date {
  return new Date(Number(date));
}
