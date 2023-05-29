import { Response, Request, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { RequestError } from '../helpers/RequestError';
import { IUserData } from '../types/user.type';

export const isExistMiddleware =
  (entityName: string) => async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { email } = req.body;
    const repository = getRepository(entityName);

    if (id && !(await repository.findOneBy({ id }))) {
      throw RequestError(404, `Not found ${entityName} with this id`);
    }

    if (email) {
      const entity = await repository.findOneBy({ email });
      if (!entity) {
        throw RequestError(404, `Not found ${entityName} with this email`);
      }
      req.user = entity as IUserData;
    }

    next();
  };
