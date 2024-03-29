import {Model} from "./Model";
import {ApiSync} from "./Sync";
import {Events} from "./Events";
import {Attributes} from "./Attributes";
import {Collection} from "./Collection";


export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(attr: UserProps): User {
        return new User(
            new Attributes<UserProps>(attr),
            new Events(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps> {
       return  new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
        );
    }

    setRandomAge():void{
        const age = Math.round(Math.random() * 100);
        this.set({age:age})
    }
}