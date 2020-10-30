export type Activity = {
  id: string;
  name: string;
  description?: string;
  locality?: string;
  price: number;
};

export type ActivityOrder = {
  id: string;
  isConfirmed: boolean;
};
