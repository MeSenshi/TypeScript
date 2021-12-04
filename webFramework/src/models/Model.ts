import {AxiosPromise, AxiosResponse} from "axios";


interface ModelAttr<T> {
    set(value: T): void;

    getAll(): T;

    get<K extends keyof T>(key: K): T[K];

}

interface Sync<T> {
    fetch(id: number): AxiosPromise;

    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;

    trigger(eventName: string): void;
}

interface HasId {
    id?:number;
}

export class Model<T extends HasId> {

    constructor(
        private attr: ModelAttr<T>,
        private events: Events,
        private sync: Sync<T>) {
    }

    //shortened for bottom functions
    on = this.events.on;
    trigger = this.events.trigger;
    get =  this.attr.get;

    //we can write it like that
    // get on() {
    //     return this.events.on
    // }
    //
    // get trigger() {
    //     return this.events.trigger;
    // }
    //
    // get get() {
    //     return this.attr.get;
    // }

    set(update: T): void {
        this.attr.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');
        if (typeof id === 'number') {
            throw new Error('cannot fetch without an id');
        }

        this.sync.fetch(id).then((res: AxiosResponse): void => {
            this.set(res.data);
        })
    }

    save(): void {
        this.sync.save(this.attr.getAll())
            .then((res: AxiosResponse): void => {
                this.trigger('save')
            })
            .catch(() => {
                this.trigger('error')
            })
    }
}