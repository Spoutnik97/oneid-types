export type FirebaseSvcType = {
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<{
    user: { uid: string; email: string | null } | null;
    idToken?: string;
  }>;
  createUser: (user: {
    email: string;
    password: string;
  }) => Promise<{ user: { uid: string; email: string } | null }>;
  getOnceAsync: (ref: string) => Promise<any>;
  getRealtime: (ref: string, callback: (data: any) => void) => any;
  set: (ref: string, data: any) => Promise<void>;
  off: (ref: string, realtimeRef: any) => void;
  remove: (ref: string) => void;
  resetPassword: (email: string) => Promise<void>;
  transaction: (ref: string, fct: (item: any | null) => void) => Promise<void>;
};
