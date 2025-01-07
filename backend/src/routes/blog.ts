import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>;

blogRouter.use("/*", async (c, next) => {
    next()
});

blogRouter.post('/', async (c) => { });

blogRouter.put('/', async (c) => { });

blogRouter.get('/',  async (c)=>{});

blogRouter.get('/bulk',  async (c)=>{});


