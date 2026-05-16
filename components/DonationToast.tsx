"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function DonationToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const donation = searchParams.get("donation");

  const isSuccess = donation === "success";
  const isCancelled = donation === "cancelled";

  useEffect(() => {
    if (!isSuccess && !isCancelled) return;

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      router.replace("/", { scroll: false });
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSuccess, isCancelled, router]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`rounded-lg px-6 py-4 shadow-lg text-sm font-medium animate-[slideUp_0.3s_ease-out] bg-[var(--bg-primary)] text-[var(--text-primary)] border ${
          isSuccess ? "border-emerald-500/50" : "border-rose-500/50"
        }`}
      >
        {isSuccess
          ? "Thank you for your donation!"
          : "Donation was cancelled."}
      </div>
    </div>
  );
}
