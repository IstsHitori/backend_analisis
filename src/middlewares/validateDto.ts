import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export const validateDTO = (DTOclass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(DTOclass, req.body);

    const errors = await validate(dtoInstance);
    
    if (errors.length > 0) {
      const formattedErrors = errors.map(({ property, constraints }) => ({
        property,
        constraints,
      }));

      res.status(400).json({
        message: "Errores de validación",
        errors: formattedErrors,
      });
      return;
    }

    next();
  };
};
