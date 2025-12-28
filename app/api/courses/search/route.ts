import { NextRequest, NextResponse } from "next/server"

const API_URL = process.env.API_URL || "http://localhost:8080/api/v1"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q")
  
  if (!query) {
    return NextResponse.json({ error: "Query parameter required" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `${API_URL}/courses/search?q=${encodeURIComponent(query)}`,
      {
        cache: "no-store",
      }
    )

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("Failed to search courses:", error)
    return NextResponse.json(
      { error: "Failed to search courses" },
      { status: 500 }
    )
  }
}