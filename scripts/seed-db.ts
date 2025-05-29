// This script seeds the MongoDB database with initial course data
import { seedDatabase } from '../lib/seed';

async function main() {
  console.log('Starting database seeding process...');
  
  try {
    await seedDatabase();
    console.log('Database seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
}

main();
