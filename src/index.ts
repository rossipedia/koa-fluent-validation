import { IValidatorObject, IHooks } from './middleware';

declare module 'koa' {
    // tslint:disable-next-line:interface-name
    interface Context {
        validationErrors: { [key: string]: string };
        validateBody(setup: IValidatorObject, hooks?: IHooks): void;
        validateParams(setup: IValidatorObject, hooks?: IHooks): void;
        validateQuery(setup: IValidatorObject, hooks?: IHooks): void;
        validateHeaders(setup: IValidatorObject, hooks?: IHooks): void;
    }
}

export { middleware as validation } from './middleware';
export {
    validatorBuilder as v,
    addCustom as addCustomValidator,
    IValidators,
} from './validator-builder';
export { filterBuilder as f, addCustom as addCustomFilter, IFilters } from './filter-builder';
export { exists } from './helpers';
