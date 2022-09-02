export type HelloAssoRequestCheckoutBody = {
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

export type HelloAssoRefreshLoginBody = {
  client_id: string;
  refresh_token: string;
  grant_type: "refresh_token";
};

export type HelloAssoLoginBody = {
  client_id: string;
  client_secret: string;
  grant_type: "client_credentials";
};

export type HelloAssoLoginResponse = {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
  refresh_token: string;
};

export type HelloAssoCheckoutResponse = {
  redirectUrl: string;
  id: number;
};
