import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { Sentry } from './shared/lib/sentry.lib';
import { IError } from './shared/lib/error.lib';
import cors from 'cors';
import routes from './routes';
import { Utils } from './shared/lib/utils.lib';
import dotenv from 'dotenv';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();

        dotenv.config();

        this.sentry();
        this.middlewares();
        this.routes();
        this.handler();
    }

    private sentry() {
        const sentry = new Sentry();
        sentry.init();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes(): void {
        this.express.use(routes);
    }

    private handler(): void {
        this.express.use((err: IError, req: Request, res: Response, next: NextFunction) => {
            const utils = new Utils();
            const dev: boolean = !utils.isProd;

            if (!err.status) { err.status = 500; }

            if (dev) { console.log('\n\n', err); }

            if (!dev && err.status === 500) { new Sentry().exception(err); }

            if (err.redirect) {
                res.status(404).send({ message: err.message, redirect: err.redirect });
            } else {
                const origin = dev && err.status === 500 ? process.env.PROJECT_NAME : '';
                res.status(err.status).send({ message: err.message, redirect: err.redirect, origin });
            }
        });
    }
}

export default new App().express;
