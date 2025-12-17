export const CompanyType = {
  RETAILER: "retailer",
  WHOLESALE: "wholesale",
  EXPORTER: "exporter",
  MANUFACTURER: "manufacturer",
  DISTRIBUTOR: "distributor",
  AGENT: "agent",
} as const;

export type CompanyType = (typeof CompanyType)[keyof typeof CompanyType];

export const CompanyTypeLabel: Record<CompanyType, string> = {
  retailer: "Retailer",
  wholesale: "Wholesale",
  exporter: "Exporter",
  manufacturer: "Manufacturer",
  distributor: "Distributor",
  agent: "Agent",
};
