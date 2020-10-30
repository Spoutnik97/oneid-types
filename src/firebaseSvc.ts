export type FirebaseSvcType = {
  getOnceAsync: (ref: string) => Promise<any>;
  getRealtime: (ref: string, callback: (data: any) => void) => any;
  set: (ref: string, data: any) => Promise<void>;
  off: (ref: string, realtimeRef: any) => void;
  remove: (ref: string) => void;
  resetPassword: (email: string) => Promise<void>;
  transaction: (ref: string, fct: (item: any | null) => void) => Promise<void>;
};
