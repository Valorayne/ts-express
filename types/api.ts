export type HttpVerb = "post" | "patch" | "get" | "put" | "delete"
export type Api = {
  [Route: string]: Partial<{
    [V in HttpVerb]: EndpointDefinition<V>
  }>
}

export type EndpointDefinition<V extends HttpVerb> = V extends "post" | "patch" | "put" ? {
  result: any,
  body: Record<string, unknown>
} : {
  result: any
}

export type ApiDefinition<T extends Api> = T