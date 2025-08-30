import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse JSON body (better than URLSearchParams for modern forms)
    const { fullName, email, contactNo, projectDetails } = await req.json();

    if (!fullName || !email || !contactNo) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("📩 Received data:", {
      fullName,
      email,
      contactNo,
      projectDetails,
    });

    // Prepare data for Google Apps Script (URLSearchParams is required there)
    const sheetData = new URLSearchParams();
    sheetData.append("fullName", fullName);
    sheetData.append("email", email);
    sheetData.append("contactNo", contactNo);
    sheetData.append("projectDetails", projectDetails || "");
    sheetData.append("timestamp", new Date().toISOString());

    // 👉 Replace with your deployed Apps Script web app URL
    const googleAppsScriptURL =
      "https://script.google.com/macros/s/AKfycbw_hN2bZOGjJmcs77_VmNayV2JB0wiT1MrFudBbc-kv7yDE9s8-8Rb-1jFcDH2AsHk/exec";

    const res = await fetch(googleAppsScriptURL, {
      method: "POST",
      body: sheetData,
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to write to Google Sheet" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ API Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}