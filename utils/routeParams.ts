type Split<S extends string, D extends string> =
  string extends S ? string[] :
    S extends '' ? [] :
      S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type RouteParamList<Path extends string> = Split<Path, "/"> extends infer Steps
  ? Steps extends (infer Step)[]
    ? Step extends `:${infer Param}`
      ? Param
      : never
    : never
  : never

export type RouteParams<Path> = Path extends string ? {
  [Param in RouteParamList<Path>]: string
} : never