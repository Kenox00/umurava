import { NextResponse } from "next/server";
import { Course } from "@/types/course";
import { getMongoDb } from "@/lib/mongodb";
import { courses as staticCourses } from "@/data/courses"; // Fallback static data

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    let courseData: Course | undefined;

    // Try to fetch from MongoDB, fall back to static data if needed
    try {
      const db = await getMongoDb();
      courseData = await db.collection("courses").findOne({ id }) as Course;
    } catch (dbError) {
      console.warn("Failed to fetch from MongoDB, using static data", dbError);
      courseData = staticCourses.find((course) => course.id === id);
    }

    if (!courseData) {
      return NextResponse.json(
        { error: `Course with ID ${id} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(courseData, { status: 200 });
  } catch (error) {
    console.error("Error in course API:", error);
    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 }
    );
  }
}
