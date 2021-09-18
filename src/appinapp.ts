import { PickerField, PriceField } from "./field";

export enum AppInAppSectionTypes {
  news = "news",
  allotments = "allotments",
  contacts = "contacts",
  meetings = "meetings",
  maps = "maps",
  informations = "informations",
}
export interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  color: string;
}
export interface News {
  id: string;
  title: string;
  description: string;
  date: number;
  color: string;
}

export interface AllotmentCondition {
  key: string;
  label: string;
  value: string;
  field: PickerField | PriceField;
}

export interface Member {
  id: string;
  oneid: string;
  given_name: string;
  family_name: string;
}

export interface Allotment {
  id: string;
  name: string;
  capacity: number;
  description: string;
  conditions: AllotmentCondition[];
  members: Member[];
  validated: boolean;
  color: string;
  responsibleUid?: string;
}

export interface Meeting {
  id: string;
  name: string;
  description?: string;
  startTime: number;
  endTime: number;
  locality?: string;
  color?: string;
}

export interface Map {
  id: string;
  title: string;
  source: string;
  type: string;
}

export type AppInAppDataType = Meeting | Allotment | Contact | News | Map;
