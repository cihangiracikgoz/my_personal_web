import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://31a06fc7535c0a074067bc5f42e8883a@o4511440828497920.ingest.de.sentry.io/4511440846061648",
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.replayIntegration(),
  ],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
