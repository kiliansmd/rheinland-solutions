// The existing service remains on its current host until a separate migration.
// These are public navigation URLs, not cross-origin authenticated API calls.
export const secureDataLinks = {
  request: "https://rheinland-essentials.alpher5.chatgpt.site/datenerfassung#bestellen",
  login: "https://rheinland-essentials.alpher5.chatgpt.site/datenerfassung/login",
  privacy: "https://rheinland-essentials.alpher5.chatgpt.site/datenerfassung/datenschutz",
} as const
