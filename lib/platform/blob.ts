export function getBlobStatus() {
  return {
    provider: "Vercel Blob",
    configured: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
    envVar: "BLOB_READ_WRITE_TOKEN",
    mode: process.env.BLOB_READ_WRITE_TOKEN ? "blob-ready" : "metadata-only",
  };
}

export async function getBlobClientStatus() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return getBlobStatus();
  }

  await import("@vercel/blob");
  return getBlobStatus();
}
