import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const ipRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "1 m"),
    prefix: "ratelimit:ip"
});

export const emailRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "1 h"),
    prefix: "ratelimit:email",
});