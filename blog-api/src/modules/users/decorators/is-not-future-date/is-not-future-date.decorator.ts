import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsNotFutureDate(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isNotFutureDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const currentDate = new Date();
          const dateToCompare = new Date(value);

          return dateToCompare <= currentDate;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} não deve ser uma data futura`;
        },
      },
    });
  };
}
