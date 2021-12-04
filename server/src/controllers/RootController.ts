import {NextFunction, Request, Response} from "express";
import {get, controller, use} from "./decorators";


function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('not allowed ')
}


@controller('')
export class RootController {
    @get('/')
    getRoot(req: Request, res: Response) {
        if (req.session?.loggedIn) {
            res.send(`
        <div>
        <div>you are logged in</div>
           <a href="/auth/logout">logout</a>
        </div>
        `)
        } else {
            res.send(`
        <div>
        <div>you are not logged in</div>
           <a href="/auth/login">login</a>
           </div>
        `)
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('welcome to protected rout loggedin user')
    }


}