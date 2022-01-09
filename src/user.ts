import { ActivityOrder } from "./activity";
import { PaymentType } from "./payment";

export interface Payment {
  type: PaymentType;
  amount: number;
  requestUuid: string;
  transactionIdentifier: string;
  date: number;
  isPending: boolean;
  ticket: string;
}

/**
 * User in the OneID app
 */
export interface User {
  uid: string | null;
  email: string | null;
  data?: Record<string, string>; // record of event field keys, and user associated value
  events: string[]; // list of proservices
  expoPushToken?: string;
}

export type StampedTicket = {
  id: string;
  timestamp: number;
};

export type UserAccountConfig = {
  allotment?: {
    id: string | null;
    isValidated: boolean;
  };
  activities?: ActivityOrder[];
  expoPushToken?: string;
  nfcUid?: string;
  stampedTickets?: StampedTicket[];
};

/**
 * @description when a user signup to an event
 */
export interface UserAccount {
  timestamp: number;
  oneid: string;
  proservice: string;
  config: UserAccountConfig;
  fields: {
    [key: string]: string;
  };
  payments?: Payment[];
}
