import { PickerField } from "./field";

export enum AppInAppSectionTypes {
  news = "news",
  allotments = "allotments",
  contacts = "contacts",
  meetings = "meetings",
  maps = "maps",
  informations = "informations"
}
export interface Contact {
  name: string;
  role: string;
  phone: string;
  email: string;
  color: string;
}
export interface News {
  title: string;
  description: string;
  date: number;
  color: string;
}

export interface AllotmentCondition {
  key: string;
  label: string;
  value: string;
  field: PickerField;
}

export interface Member {
  oneid: string;
  given_name: string;
  family_name: string;
}

export interface Allotment {
  name: string;
  capacity: number;
  description: string;
  conditions: AllotmentCondition[];
  members: Member[];
  validated: boolean;
  color: string;
}

export interface Meeting {
  name: string;
  description?: string;
  startTime: number;
  endTime: number;
  locality?: string;
  color?: string;
}

export interface Map {
  title: string;
  source: string;
  type: string;
}

export type AppInAppDataType = Meeting | Allotment | Contact | News | Map;
