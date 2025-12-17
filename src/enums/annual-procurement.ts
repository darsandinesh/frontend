export const AnnualProcurementVol = {
  RANGE_0_1000: "0 - 1000 MT",
  RANGE_1000_5000: "1000 - 5000 MT",
  RANGE_5000_10000: "5000 - 10000 MT",
  RANGE_10000_PLUS: "10000 MT+",
} as const;

export type AnnualProcurementVol =
  (typeof AnnualProcurementVol)[keyof typeof AnnualProcurementVol];

export const AnnualProcurementVolLabel: Record<AnnualProcurementVol, string> = {
  "0 - 1000 MT": "0 - 1000 MT",
  "1000 - 5000 MT": "1000 - 5000 MT",
  "5000 - 10000 MT": "5000 - 10000 MT",
  "10000 MT+": "10000 MT+",
};
