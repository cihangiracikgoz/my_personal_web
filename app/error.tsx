'use client';

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <button
        onClick={reset}
        className="px-6 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium"
      >
        Try again
      </button>
    </div>
  );
}
