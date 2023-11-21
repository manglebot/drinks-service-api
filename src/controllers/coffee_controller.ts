// import Express from 'express';
// import * as coffeeService from '../services/coffee_service';
// export const getCoffee = async (req: Express.Request, res:
// Express.Response) => {
//      const { coffeeName } = req.query;
//      const coffee = coffeeService.getCoffee(coffeeName as
// string);
//      res.json(coffee).status(200);
// };

import { Request, Response } from 'express';
// altered import
import * as coffeeService from '../services/coffee_service';
export const getCoffee = async (
    req: Request<object, object, object, { coffeeName: string | undefined }>,
    res: Response) => {
     const coffeeName  = req.query.coffeeName;
     const coffee = coffeeService.getCoffee(coffeeName);
     res.json(coffee).status(200);
};