import prisma from "./client";

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.json({ 'message': 'test message' });
});
app.get('/products', async (req: Request, res: Response) => {
    const product = await prisma.product.findMany({});
    res.json(product);
});

app.post('/products', async (req: Request, res: Response) => {

    const product = await prisma.product.create({
        data: req.body
    })

    res.json(product)
});

app.get("/products/:id", async (req: Request, res: Response) => {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(req.params.id),
        }
    });
    res.json(product);
});


app.delete("/products/:id", async (req: Request, res: Response) => {
    const product = await prisma.product.delete({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(product);
});

app.put("/products/:id", async (req: Request, res: Response) => {
    const product = await prisma.product.update({ where: { id: Number(req.params.id)} , data: req.body });
    res.json(product);
});

app.patch("/products/:id", async (req: Request, res: Response) => {
    const product = await prisma.product.update({
        where: {
            id: Number(req.params.id),
        },
        data: req.body,
    });
    res.json(product);
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});