// ===============================
// 📅 JavaScript Dates Cheatsheet
// ===============================

// --- 1. Creating Dates ---
console.log("\n--- Creating Dates ---");
console.log(new Date()); // now, local timezone
console.log(new Date(2025, 8, 15)); // Sep 15, 2025 (month is 0-based!)
console.log(new Date("2025-09-15T12:00:00Z")); // ISO 8601 (UTC)
console.log(new Date(1631718000000)); // from epoch ms

// --- 2. Epoch (Jan 1 1970 UTC) ---
console.log("\n--- Epoch ---");
console.log(Date.now()); // ms since epoch
console.log(+new Date()); // same as above

// --- 3. Common Getters ---
console.log("\n--- Common Getters ---");
const d = new Date("2025-09-15T12:34:56Z");
console.log("Year:", d.getFullYear(), d.getUTCFullYear());
console.log("Month:", d.getMonth(), d.getUTCMonth()); // 0 = Jan
console.log("Date:", d.getDate(), d.getUTCDate());
console.log("Day of week:", d.getDay()); // 0 = Sunday
console.log("Hours:", d.getHours(), d.getUTCHours());

// --- 4. Common Setters ---
console.log("\n--- Setters ---");
d.setFullYear(2030);
console.log("New year (local):", d.toString());
d.setUTCDate(1);
console.log("Set UTC day to 1:", d.toISOString());

// --- 5. Formatting ---
console.log("\n--- Formatting ---");
console.log("Local:", new Date().toString());
console.log("UTC:", new Date().toUTCString()); // "GMT" label
console.log("ISO:", new Date().toISOString()); // always UTC

// --- 6. Arithmetic ---
console.log("\n--- Arithmetic ---");
const start = new Date("2025-09-15T10:00:00Z");
const end = new Date("2025-09-15T12:30:00Z");
const diffMs = end - start;
console.log("Diff (ms):", diffMs);
console.log("Diff (hours):", diffMs / (1000 * 60 * 60));

const oneDay = 86_400_000;
console.log("Add 1 day:", new Date(start.getTime() + oneDay).toISOString());

// --- 7. Time Zones ---
console.log("\n--- Time Zones ---");
const utc = new Date("2025-09-15T12:00:00Z");
console.log("UTC:", utc.toLocaleString("en-US", { timeZone: "UTC" }));
console.log(
  "New York:",
  utc.toLocaleString("en-US", { timeZone: "America/New_York" })
);
console.log(
  "Paris:",
  utc.toLocaleString("fr-FR", { timeZone: "Europe/Paris" })
);

// --- 8. Utility Constants ---
console.log("\n--- Utility Constants ---");
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
console.log({ SECOND, MINUTE, HOUR, DAY });

// --- Interview Takeaways ---
// 1. Always store times in UTC (safe, no DST bugs).
// 2. Use ISO strings for APIs/databases.
// 3. Do math in ms since epoch.
// 4. Remember months are 0-based (0 = Jan).
// 5. Use UTC getters/setters for predictable results.
// 6. Convert to local time only for display.
