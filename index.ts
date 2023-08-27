import {ApiImplementation, Endpoint} from "./types";

type TestApi = {
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
  }
}

const getNumbersHandler: Endpoint<TestApi, "/numbers/:numberId", "get"> = ({}) => 42

export const Implementation: ApiImplementation<TestApi> = {
  "/numbers/:numberId": {
    get: getNumbersHandler,
    post: ({numberId}, {numberContent}) => {
    }
  },
  "/strings/:stringId": {
    get: () => ""
  },
  base: {
    post: ({test}) => test
  }
}