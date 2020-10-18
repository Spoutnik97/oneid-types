export type FirebaseSvcType = {
  getOnceAsync: (ref: string) => Promise<any>;
  getRealtime: (ref: string, callback: (data: any) => void) => any;
  set: (ref: string, data: object) => Promise<void>;
  off: (ref: string, realtimeRef: any) => void;
  remove: (ref: string) => void;
  resetPassword: (email: string) => Promise<void>;
};
