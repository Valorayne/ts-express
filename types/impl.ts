import {Api, EndpointBody, EndpointQuery, EndpointResult} from "./index";
import {RouteParams} from "../utils/routeParams";

export type ApiImplementation<A extends Api> = {
  [R in keyof A]: {
    [V in keyof A[R]]: EndpointHandler<
      RouteParams<R>,
      EndpointQuery<A, R, V>,
      EndpointBody<A, R, V>,
      EndpointResult<A, R, V>
    >
  }
}

type EndpointHandler<Params, Query, Body, Result> = {} extends Params
  ? Body extends undefined
    ? Query extends undefined
      ? () => Result
      : (query: Query) => Result
    : Query extends undefined
      ? (body: Body) => Result
      : (query: Query, body: Body) => Result
  : Body extends undefined
    ? Query extends undefined
      ? (params: Params) => Result
      : (params: Params, query: Query) => Result
    : Query extends undefined
      ? (params: Params, body: Body) => Result
      : (params: Params, query: Query, body: Body) => Result

