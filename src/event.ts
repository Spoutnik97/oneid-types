import { OneIDField } from "./field";
import { Teammate } from "./userpro";

export type PaymentOptionsType = {
  mode: number;
  fixedPrice: number;
  vendorToken: string | null;
};

export interface OneIDEvent {
  version?: number;
  proservice: string;
  name: string;
  organizer: string;
  logo: string;
  admin: string; // uid of the administrator
  askFields: OneIDField[];
  isNotAsked: OneIDField[];
  isNotRequired: OneIDField[]; // @deprecated
  paymentOptions: PaymentOptionsType;
  idDocument: boolean;
  generateContract: boolean;
  editEnabled: boolean;
  color: string | null;
  description: string | null;
  limit: number;
  waitingList: boolean;
  keepCopy: boolean;
  appEnabled: boolean;
  eventEnabled: boolean;
  remoteApi: string | null;
  cguLink: string | null;
  onlyMobile: boolean;
}

export type EventSettings = {
  teammates?: Teammate[];
  userCounter?: number;
  admin: string;
};
