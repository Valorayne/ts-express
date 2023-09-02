import {Api, EndpointBody, EndpointResult} from "./index";
import {RouteParams} from "../utils/routeParams";

export type ApiImplementation<A extends Api> = {
  [R in keyof A]: {
    [V in keyof A[R]]: EndpointHandler<
      RouteParams<R>,
      EndpointBody<A, R, V>,
      EndpointResult<A, R, V>
    >
  }
}

type EndpointHandler<Params, Body, Result> = {} extends Params
  ? Body extends undefined
    ? () => Result
    : (body: Body) => Result
  : Body extends undefined
    ? (params: Params) => Result
    : (params: Params, body: Body) => Result

