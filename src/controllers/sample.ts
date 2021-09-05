import { Request, NextFunction, Response } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `Sample health check route calle`);
  return res.status(200).json({
    message: 'pong',
  });
};

export { sampleHealthCheck };
