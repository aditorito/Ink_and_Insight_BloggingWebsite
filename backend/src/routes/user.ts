import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  sign, verify } from "hono/jwt";


export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }>;

userRouter.post("/signup", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    
    try {
        const user = await prisma.user.create({
            data:{
                email:body.email,
                username:body.username,
                name:body.name,
                password:body.password
            }
        })

        const jwt_token = await sign({
            id:user.id
        }, c.env.JWT_SECRET)
        return c.text(jwt_token)
        
    } catch (error) {
        c.status(411);
        return c.text("Invalid Inputs")
        
    }

})

userRouter.put("/signin", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    try {
        const user = await prisma.user.findUnique({
            where:{
                username:body.username,
                password:body.password
            }
        });

        if (!user) {
            c.status(403)
            return c.text("user not found!");
        }
        const jwt_token = await sign({
            id:user.id
        }, c.env.JWT_SECRET)
        return c.text(jwt_token)
        
    } catch (error) {
        c.status(411);
        console.log(error);        
        return c.text("Server Error will authenticating")
        
    }

})

userRouter.get("/", async (c)=>{
    return c.text("jai baba ki kya hal hai")
})