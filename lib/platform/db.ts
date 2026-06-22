import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

let cachedSql: ReturnType<typeof neon> | null = null;
let cachedDb: ReturnType<typeof drizzle> | null = null;

export function getDatabaseStatus() {
  return {
    provider: "Neon Postgres through Vercel Marketplace",
    configured: Boolean(process.env.DATABASE_URL),
    envVar: "DATABASE_URL",
    mode: process.env.DATABASE_URL ? "database-ready" : "static-packet-mode",
  };
}

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  if (!cachedSql) {
    cachedSql = neon(databaseUrl);
  }

  return cachedSql;
}

export function getDb() {
  const sql = getSql();

  if (!sql) {
    return null;
  }

  if (!cachedDb) {
    cachedDb = drizzle(sql);
  }

  return cachedDb;
}
