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

/**
 * @description when a user signup to an event
 */
export interface UserAccount {
  timestamp: number;
  oneid: string;
  proservice: string;
  config: {
    allotment?: {
      id: string | null;
      isValidated: boolean;
    };
    activities?: ActivityOrder[];
    expoPushToken?: string;
    nfcUid?: string;
  };
  fields: {
    [key: string]: string;
  };
  /**
   * @deprecated use payments instead
   */
  payment?: {
    transactionIds?: string[];
    amounts?: number[];
    dates?: number[];
    totalPaid: number;
    totalToPay: number;
    pending?: string;
    tickets?: string[];
  };
  totalToPay?: number;
  payments?: Payment[];
}
