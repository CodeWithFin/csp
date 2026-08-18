import { randomUUID } from "crypto";
import { mkdir, readFile, rename, writeFile } from "fs/promises";
import path from "path";

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  createdAt: string;
  read: boolean;
};

function dataDir() {
  return process.env.DATA_DIR || path.join(process.cwd(), "data");
}

function dataFile() {
  return path.join(dataDir(), "inquiries.json");
}

let lock: Promise<void> = Promise.resolve();

function withLock<T>(fn: () => Promise<T>) {
  const run = lock.then(fn, fn);
  lock = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readAll(): Promise<Inquiry[]> {
  try {
    const raw = await readFile(dataFile(), "utf8");
    const parsed = JSON.parse(raw) as Inquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(items: Inquiry[]) {
  const dir = dataDir();
  await mkdir(dir, { recursive: true });
  const file = dataFile();
  const tmp = `${file}.${process.pid}.tmp`;
  await writeFile(tmp, JSON.stringify(items, null, 2));
  await rename(tmp, file);
}

export function listInquiries() {
  return withLock(async () => {
    const items = await readAll();
    return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  });
}

export function createInquiry(input: Omit<Inquiry, "id" | "createdAt" | "read">) {
  return withLock(async () => {
    const items = await readAll();
    const inquiry: Inquiry = {
      ...input,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      read: false,
    };
    items.push(inquiry);
    await writeAll(items);
    return inquiry;
  });
}

export function markInquiryRead(id: string) {
  return withLock(async () => {
    const items = await readAll();
    const next = items.map((item) => (item.id === id ? { ...item, read: true } : item));
    await writeAll(next);
  });
}

export function deleteInquiry(id: string) {
  return withLock(async () => {
    const items = await readAll();
    await writeAll(items.filter((item) => item.id !== id));
  });
}
