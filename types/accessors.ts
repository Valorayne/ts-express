import {ApiImplementation} from "./impl";
import {Api} from "./api";

export type Route<A extends Api> = keyof A

export type Endpoint<
  A extends Api,
  R extends Route<A>,
  V extends EndpointVerb<A, R>
> = ApiImplementation<A>[R][V]

export type EndpointVerb<
  A extends Api,
  R extends Route<A>
> = keyof ApiImplementation<A>[R]

export type EndpointResult<
  A extends Api,
  R extends Route<A>,
  V extends EndpointVerb<A, R>
  //@ts-ignore
> = A[R][V]["result"] extends infer Result ? Result : never

export type EndpointBody<
  A extends Api,
  R extends Route<A>,
  V extends EndpointVerb<A, R>
  //@ts-ignore
> = A[R][V]["body"] extends infer Body ? Body : never