export interface Quote {
  date: Date;
  quote: string;
}

export const quotes: Quote[] = [
  {
    date: new Date("2025-01-01"),
    quote: "The best way to predict the future is to create it.",
  },
  {
    date: new Date("2025-01-02"),
    quote: "The best preparation for tomorrow is doing your best today.",
  },
];
