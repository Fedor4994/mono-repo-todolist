import { Response, Request, NextFunction } from 'express';
export declare const isExistMiddleware: (entityName: string) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
