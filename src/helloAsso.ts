export type RequestCheckoutBody = {
  totalAmount: number;
  initialAmount: number;
  itemName: string;
  backUrl: string;
  errorUrl: string;
  returnUrl: string;
  containsDonation: boolean;
  payer?: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  metadata?: Record<string, any>;
  trackingParameter?: string;
};

export type RefreshLoginBody = {
  client_id: string;
  refresh_token: string;
  grant_type: "refresh_token";
};

export type LoginBody = {
  client_id: string;
  client_secret: string;
  grant_type: "client_credentials";
};
