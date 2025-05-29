import { getMongoDb } from "./mongodb";
import { courses } from "@/data/courses";

/**
 * Seeds the MongoDB database with sample course data
 * 
 * @returns Promise<void>
 */
export async function seedDatabase() {
  try {
    const db = await getMongoDb();
    const coursesCollection = db.collection("courses");
    
    // Check if courses already exist
    const existingCount = await coursesCollection.countDocuments();
    
    if (existingCount === 0) {
      console.log("Seeding courses collection...");
      const result = await coursesCollection.insertMany(courses);
      console.log(`Successfully seeded ${result.insertedCount} courses`);
    } else {
      console.log(`Database already contains ${existingCount} courses. Skipping seed.`);
    }
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}
