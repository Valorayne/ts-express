export type HttpVerb = "post" | "patch" | "get" | "put" | "delete"
export type Api = {
  [Route: string]: Partial<{
    [V in HttpVerb]: EndpointDefinition<V>
  }>
}

export type EndpointDefinition<V extends HttpVerb> = {
  result: any
  body?: V extends "post" | "patch" | "put" ? Record<string, unknown> : never
}

