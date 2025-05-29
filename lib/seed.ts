import { getMongoDb } from "./mongodb";
import { courses } from "@/data/courses";

interface SeedOptions {
  force?: boolean;
}

/**
 * Seeds the MongoDB database with sample course data
 * 
 * @param options - Seeding options
 * @param options.force - If true, will drop existing data and reseed
 * @returns Promise<void>
 */
export async function seedDatabase(options: SeedOptions = {}) {
  try {
    const { force = false } = options;
    const db = await getMongoDb();
    const coursesCollection = db.collection("courses");
    
    // Check if courses already exist
    const existingCount = await coursesCollection.countDocuments();
    
    if (existingCount > 0 && force) {
      console.log("Forcing reseed. Dropping existing data...");
      await coursesCollection.deleteMany({});
      console.log("Existing courses deleted.");
    }
    
    if (existingCount === 0 || force) {
      console.log("Seeding courses collection...");
      const result = await coursesCollection.insertMany(courses);
      console.log(`Successfully seeded ${result.insertedCount} courses`);
    } else {
      console.log(`Database already contains ${existingCount} courses. Skipping seed.`);
      console.log("Use the --force flag to override and reseed the database.");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}
