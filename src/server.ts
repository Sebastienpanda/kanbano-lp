import { join } from "node:path";

import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr/node";
import fastifyStatic from "@fastify/static";
import Fastify, { FastifyInstance } from "fastify";

import bootstrap from "./main.server";

const browserDistFolder = join(import.meta.dirname, "../browser");

export async function createServer(): Promise<FastifyInstance> {
    const app = Fastify({ logger: true });
    const engine = new CommonEngine();

    app.register(fastifyStatic, {
        root: browserDistFolder,
        wildcard: false,
    });

    app.get("*", async (req, reply) => {
        const html = await engine.render({
            bootstrap,
            documentFilePath: join(browserDistFolder, "index.html"),
            url: req.url,
            publicPath: browserDistFolder,
            providers: [{ provide: APP_BASE_HREF, useValue: req.url }],
        });

        reply.type("text/html").send(html);
    });

    return app;
}

const port = process.env["PORT"] ? +process.env["PORT"] : 4000;
createServer().then((app) => {
    void app.listen({ port, host: "0.0.0.0" });
});
