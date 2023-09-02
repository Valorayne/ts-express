import {ApiDefinition, ApiImplementation, Endpoint} from "./types";

type TestApi = ApiDefinition<{
  "/numbers/:numberId": {
    get: {
      result: number
    }
    post: {
      result: void
      body: {
        numberContent: string
      }
    }
  }
  "/strings/:stringId": {
    get: {
      result: string
    }
  },
  "base": {
    post: {
      result: string
      body: {
        test: string
      }
    }
    get: {
      query: {
        first: string,
        second: number
      }
      result: number
    }
  }
}>

const getNumbersHandler: Endpoint<TestApi, "/numbers/:numberId", "get"> = ({numberId}) => 42

export const Implementation: ApiImplementation<TestApi> = {
  "/numbers/:numberId": {
    get: getNumbersHandler,
    post: ({numberId}, {numberContent}) => {
    }
  },
  "/strings/:stringId": {
    get: ({stringId}) => stringId
  },
  base: {
    post: ({test}) => test,
    get: ({first, second}) => first.length + second
  }
}