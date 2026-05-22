import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let violations: Record<string, unknown>[];

    if (contentType.includes("application/reports+json")) {
      const reports = await request.json();
      violations = Array.isArray(reports)
        ? reports.filter((r: { type: string }) => r.type === "csp-violation")
        : [];
    } else {
      const body = await request.json();
      violations = [body["csp-report"] ?? body];
    }

    for (const violation of violations) {
      console.error("[CSP Violation]", JSON.stringify(violation));
    }

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Invalid report" }, { status: 400 });
  }
}
