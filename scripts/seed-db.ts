// This script seeds the MongoDB database with initial course data
import { seedDatabase } from '../lib/seed';

async function main() {
  console.log('Starting database seeding process...');
  
  // Check for force flag in command line arguments
  const args = process.argv.slice(2);
  const forceReseed = args.includes('--force') || args.includes('-f');
  
  try {
    await seedDatabase({ force: forceReseed });
    console.log('Database seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
}

main();
