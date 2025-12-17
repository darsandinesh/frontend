export const Designation = {
  SUPERVISOR: "supervisor",
  MANAGER: "manager",
  DIRECTOR: "director",
  CEO: "ceo",
} as const;

export type Designation = (typeof Designation)[keyof typeof Designation];

export const DesignationLabel: Record<Designation, string> = {
  supervisor: "Supervisor",
  manager: "Manager",
  director: "Director",
  ceo: "CEO",
};
