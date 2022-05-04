export function isDefined(argument: unknown): boolean {
  return argument === null || argument === undefined ? false : true;
}

export function getDateWithoutTimeStamp(date: Date): string {
  return date.toISOString().toString().split("T")[0];
}

export function getDate(date: string): Date {
  return new Date(Number(date));
}
