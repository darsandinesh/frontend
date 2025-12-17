export const ProcurementFrequency = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
  QUARTERLY: "quarterly",
  HALF_YEARLY: "half_yearly",
  YEARLY: "yearly",
} as const;

export type ProcurementFrequency =
  (typeof ProcurementFrequency)[keyof typeof ProcurementFrequency];

export const ProcurementFrequencyLabel: Record<ProcurementFrequency, string> = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  half_yearly: "Half Yearly",
  yearly: "Yearly",
};
