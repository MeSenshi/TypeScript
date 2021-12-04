import 'reflect-metadata';
import {RequestHandler} from 'express'
import {Methods} from "./Methods";
import {MetadataKeys} from "./MetadataKeys";

//that interface its for method that get request/response and return void (only)
interface RoutHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler
}

function routeBinder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: RoutHandlerDescriptor) {
            Reflect.defineMetadata(MetadataKeys.path, path, target, key)
            Reflect.defineMetadata(MetadataKeys.method, method, target, key)
        }
    }
}


export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
