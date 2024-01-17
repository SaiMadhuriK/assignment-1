// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  const { numAsNumber } = req.params;

  const fibN: number = fibonacci(parseInt(numAsNumber));
  let result: string;
  result = '';
  if (fibN < 0 || isNaN(fibN)) {
    result = 'fibonacci(${numAsNumber}) is undefined';
  }

  else if(fibN>=0 && !isNaN(fibN)){
    result = 'fibonacci(${numAsNumber}) is ${fibN}';
  }
  res.send(result);
};