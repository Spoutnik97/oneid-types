interface Permission {
    title: string;
    description?: string;
}
export interface AllPermissions {
    ACCESS: Permission;
    READ: Permission;
    DELETE_ACCOUNT: Permission;
    EDIT_ACCOUNT: Permission;
    CASH_ACCOUNT: Permission;
    ADD_ACCOUNT: Permission;
    EXPORT: Permission;
    ADD_TEAMMATE: Permission;
    EDIT_EVENT: Permission;
    SEE_WAITINGLIST: Permission;
    SEE_STATISTICS: Permission;
    WEBCONNECTION: Permission;
    EDIT_APPINAPP: Permission;
    EDIT_PERMISSIONS: Permission;
    MANAGE_ALLOTMENTS: Permission;
}
export declare type Teammate = {
    isConnected: false;
    email: string;
    permissions: {
        [P in keyof AllPermissions]: boolean;
    };
} | {
    isConnected: true;
    oneid: string;
    email: string;
    permissions: {
        [P in keyof AllPermissions]: boolean;
    };
};
export interface UserPermissions {
    ACCESS: boolean;
    READ?: boolean;
    DELETE_ACCOUNT?: boolean;
    EDIT_ACCOUNT?: boolean;
    CASH_ACCOUNT?: boolean;
    ADD_ACCOUNT?: boolean;
    EXPORT?: boolean;
    ADD_TEAMMATE?: boolean;
    EDIT_EVENT?: boolean;
    SEE_WAITINGLIST?: boolean;
    SEE_STATISTICS?: boolean;
    WEBCONNECTION?: boolean;
    EDIT_APPINAPP?: boolean;
    EDIT_PERMISSIONS?: boolean;
    MANAGE_ALLOTMENTS?: boolean;
}
export declare type PlanType = "standard" | "premium" | "business";
export interface UserPro {
    uid: string;
    oneid: string;
    email: string;
    plan: string;
    idToken: string;
    eventsOptions?: {
        [proservice: string]: {
            permissions: UserPermissions;
        };
    };
}
export {};
