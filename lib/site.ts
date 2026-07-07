export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://devsolve.com";

export const siteName = "DevSolve";

export const siteDescription =
  "DevSolve is a global institute for leadership excellence and institutional capacity building, advancing research, training, and innovation in local governance, sustainable development, and emerging technologies — in India and internationally.";

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
