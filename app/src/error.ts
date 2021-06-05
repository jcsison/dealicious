export interface DomainError extends Error {
  type: string;
  status: number;
}
