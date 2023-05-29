import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsCpfValidConstraint } from './is-cpf-valid.constraint';

export function IsCpfValid(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isCpfValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCpfValidConstraint,
    });
  };
}
