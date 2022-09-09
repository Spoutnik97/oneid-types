export declare type PaymentType = "lydia" | "ancv" | "helloasso";
export declare type MetadataPaymentRequestAPI = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
};
/**
 * @param recipient is a phone number for Lydia request, or ANCV n° for ANCV request
 * @param amount is an integer in cents (e.g. 2000 = 20 €)
 * @param metadata is a stringified @MetadataPaymentRequestAPI
 */
export interface PaymentRequestAPI {
    type: PaymentType;
    proservice: string;
    oneid: string;
    recipient: string;
    amount: number;
    env?: "prod" | "dev";
    metadata?: string;
}
export declare type PaymentResponseAPI = {
    success: true;
    paymentTicket: string;
    url?: string;
} | {
    success: false;
    message: string;
};
export declare type PaymentRequest = {
    type: PaymentType;
    amount: number;
    date: number;
    oneid: string;
    paymentTicket: string;
    proservice: string;
    request_uuid: string;
    status: "done" | "waiting" | "failed";
};
//# sourceMappingURL=payment.d.ts.map