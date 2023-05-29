import { Request, Response, NextFunction } from 'express';
export declare const tryCatch: (controller: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
