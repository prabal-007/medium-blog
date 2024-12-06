import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
        c.set("userId", user.id);
        await next();
    } else {
        c.status(401)
        return c.json({ error: "You are not logged in!" })
    }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userid = await c.get("userId")
    const body = await c.req.json();
    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userid
        }
    });

    return c.json({
        message: `Blog ${blog.id} created successfully`,
    });
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        message: `Blog ${blog.id} updated successfully`,
    });
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.findMany();

    return c.json({
        blog
    })
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = await c.req.param("id");
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })
        return c.json({
            blog
        });
    } catch (e) {
        c.status(404)
        return c.json({ error: "Some Error" })
    }

})
