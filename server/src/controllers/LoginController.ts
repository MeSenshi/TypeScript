import {Request, Response} from "express";
import {get, controller, bodyValidator, post} from "./decorators";


@controller('/auth')
export class LoginController {

    @get('/login')
    getLogin(req: Request, res: Response): void {

        res.send(`
<form method="POST">
    <div>
        <label>email</label>
        <input name="email">
    </div>
    <div>
        <label>password</label>
        <input type="password" name="password">
    </div>
    <button>submit</button>
</form>
`);
    }


    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const {email, password} = req.body;
        if (email === 'test@test.com' && password === '1234') {
            req.session = {loggedIn: true};
            res.redirect('/')
        } else {
            res.send(`
        <div>
        <p>invalid email or password</p>
        <a href="/auth/login">login</a>
        </div>
        `)
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/')
    };


}