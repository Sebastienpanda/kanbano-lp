import { InjectionToken } from "@angular/core";
import { FastifyReply } from "fastify";

export const FASTIFY_RESPONSE = new InjectionToken<FastifyReply>("FASTIFY_RESPONSE");
