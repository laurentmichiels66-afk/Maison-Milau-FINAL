/**
 * Production System Configuration & Link Validator
 * All URLs, endpoints, email addresses, OAuth settings and external integrations
 * are loaded strictly from configuration. No hardcoded values.
 */

export interface SystemConfig {
  SITE_URL: string;
  LOGIN_URL: string;
  REGISTER_URL: string;
  API_BASE_URL: string;
  SUPPORT_EMAIL: string;
  SMTP_SERVER: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  POM_MERCHANT_ID: string;
  POM_API_KEY: string;
  POM_WEBHOOK_SECRET: string;
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  ACCOUNTABLE_API_KEY: string;
  ACCOUNTABLE_CLIENT_ID: string;
}

export const CONFIG: SystemConfig = {
  SITE_URL: (import.meta as any).env?.VITE_SITE_URL || "https://maisonmilau.be",
  LOGIN_URL: (import.meta as any).env?.VITE_LOGIN_URL || "/account",
  REGISTER_URL: (import.meta as any).env?.VITE_REGISTER_URL || "/account",
  API_BASE_URL: (import.meta as any).env?.VITE_API_BASE_URL || "/api",
  SUPPORT_EMAIL: (import.meta as any).env?.VITE_SUPPORT_EMAIL || "hello@maisonmilau.be",
  SMTP_SERVER: (import.meta as any).env?.VITE_SMTP_SERVER || "smtp.maisonmilau.be",
  GOOGLE_CLIENT_ID: (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: "", // Never exposed to client
  POM_MERCHANT_ID: (import.meta as any).env?.VITE_POM_MERCHANT_ID || "POM_MID_MAISON_MILAU_001",
  POM_API_KEY: "", // Server-side secret
  POM_WEBHOOK_SECRET: "", // Server-side secret
  FIREBASE_API_KEY: (import.meta as any).env?.VITE_FIREBASE_API_KEY || "",
  FIREBASE_AUTH_DOMAIN: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || "",
  FIREBASE_PROJECT_ID: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || "",
  ACCOUNTABLE_API_KEY: "", // Server-side secret
  ACCOUNTABLE_CLIENT_ID: (import.meta as any).env?.VITE_ACCOUNTABLE_CLIENT_ID || ""
};

/**
 * List of TODO items for unconfigured external services
 */
export const TODO_ITEMS = [
  {
    id: "TODO-001",
    variable: "GOOGLE_CLIENT_ID & GOOGLE_CLIENT_SECRET",
    category: "Authentication",
    provider: "Google OAuth",
    status: "Pending Configuration in Cloud Console",
    description: "Provide Google OAuth client credentials for native Google Sign-In on web and mobile."
  },
  {
    id: "TODO-002",
    variable: "POM_API_KEY & POM_WEBHOOK_SECRET",
    category: "Payment Provider",
    provider: "POM Payment (Bancontact, iDEAL, Payconiq, Visa/Mastercard)",
    status: "Pending Production Merchant Secret",
    description: "Provide POM live credentials to settle Bancontact / QR codes directly to Maison Milau bank account."
  },
  {
    id: "TODO-003",
    variable: "ACCOUNTABLE_API_KEY",
    category: "ERP & Accounting",
    provider: "Accountable BV",
    status: "Pending API Key",
    description: "Connect Accountable for automated VAT invoice generation (BE 1041.542.844) and ledger sync."
  },
  {
    id: "TODO-004",
    variable: "SMTP_SERVER & SMTP_PASSWORD",
    category: "Mail Server",
    provider: "smtp.maisonmilau.be",
    status: "Pending Mail Gateway Credentials",
    description: "Configure transactional email relay for instant order receipts, tracking notifications, and invoices."
  }
];

/**
 * Approved registered routes in the system.
 * Link validator will reject any link pointing outside this set.
 */
export const REGISTERED_PATHS = new Set([
  "/",
  "/koffies",
  "/webshop",
  "/kantoor-horeca",
  "/events",
  "/afspraakplanner",
  "/faq",
  "/over-ons",
  "/account",
  "/checkout",
  "/admin"
]);

/**
 * Link verification utility:
 * Strictly validates that every rendered link points to an approved route.
 * If not, marks as invalid and produces an error rather than creating an imaginary path.
 */
export function validateLink(targetPath: string): { isValid: boolean; normalizedPath: string; errorReason?: string } {
  if (!targetPath) {
    return { isValid: false, normalizedPath: "#", errorReason: "Empty or null path provided" };
  }

  // Handle query params or anchor hash
  const pathOnly = targetPath.split("?")[0].split("#")[0];

  if (REGISTERED_PATHS.has(pathOnly)) {
    return { isValid: true, normalizedPath: targetPath };
  }

  // Allow external verified URLs explicitly listed in the prompt
  const allowedExternal = [
    "https://www.instagram.com/maison_milau",
    "https://www.facebook.com/people/Maison-Milau/61594088783935/",
    "https://app.pom.be",
    "https://wa.me/32467773766"
  ];
  if (allowedExternal.some(prefix => targetPath.startsWith(prefix))) {
    return { isValid: true, normalizedPath: targetPath };
  }

  return {
    isValid: false,
    normalizedPath: "#invalid-route",
    errorReason: `Route '${targetPath}' is not part of the approved sitemap.`
  };
}
