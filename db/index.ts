import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

const connectionString = process.env.AUTH_DRIZZLE_URL;
if (!connectionString) {
  throw new Error('AUTH_DRIZZLE_URL is not set');
}
const pool = postgres(connectionString, { max: 1 });
export const db = drizzle(pool, { schema });
