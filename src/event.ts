import { OneIDField } from "./field";
import { PlanType, Teammate } from "./userpro";

export type PaymentOptionsType = {
  mode: number;
  fixedPrice: number;
  confirmationPrice?: number;
  vendorToken: string | null;
  ancvShopId: string | null;
  helloAssoClientId: string | null;
  helloAssoClientSecret: string | null;
};

type TicketConfigBase = {
  id: string;
  title: string;
  type: "field" | "all" | "allotment";
  times: number;
  timeMode: "any" | "eachDay";
};

export interface TicketConfigField extends TicketConfigBase {
  type: "field";
  fieldKey: string;
  values: string[];
}
export interface TicketConfigAll extends TicketConfigBase {
  type: "all";
}
export interface TicketConfigAllotment extends TicketConfigBase {
  type: "allotment";
}

export type TicketConfig =
  | TicketConfigField
  | TicketConfigAll
  | TicketConfigAllotment;

/**
 * @param version if version is too low, user cannot sign up to the event
 */

export interface OneIDEvent {
  version?: number;
  plan?: PlanType;
  proservice: string;
  name: string;
  organizer: string;
  logo: string;
  admin: string; // uid of the administrator
  askFields: OneIDField[];
  isNotAsked?: OneIDField[]; // @deprecated
  isNotRequired?: OneIDField[]; // @deprecated
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
  hasAllotment?: boolean;
  paymentDisabled?: boolean;
  backgroundUrl?: string;
  startTime?: number;
  ticketsConfig?: TicketConfig[];
}

export type EventSettings = {
  teammates?: Teammate[];
  userCounter?: number;
  optionsCounter?: Record<string, Record<string, number>>;
  admin: string;
};
