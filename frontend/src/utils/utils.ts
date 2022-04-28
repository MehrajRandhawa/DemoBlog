export function isDefined(argument: unknown): boolean {
  return argument === null || argument === undefined ? false : true;
}
