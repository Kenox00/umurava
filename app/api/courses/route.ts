import { NextResponse } from "next/server";
import { Course } from "@/types/course";
import { courses } from "@/data/courses"; // Fallback static data
import { getMongoDb } from "@/lib/mongodb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("search")?.toLowerCase() || "";

  try {
    let courseData: Course[];

    // Try to fetch from MongoDB, fall back to static data if needed
    try {
      const db = await getMongoDb();
      courseData = await db.collection("courses").find().toArray() as Course[];
    } catch (dbError) {
      console.warn("Failed to fetch from MongoDB, using static data", dbError);
      courseData = courses;
    }

    // Filter courses based on search query
    const filteredCourses = query
      ? courseData.filter(
          (course) =>
            course.title.toLowerCase().includes(query) ||
            course.shortDescription.toLowerCase().includes(query)
        )
      : courseData;

    return NextResponse.json(filteredCourses, { status: 200 });
  } catch (error) {
    console.error("Error in courses API:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
