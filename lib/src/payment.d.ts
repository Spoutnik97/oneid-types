export declare type PaymentType = "lydia" | "ancv";
/**
 * @param recipient is a phone number for Lydia request, or ANCV n° for ANCV request
 * @param amount is an integer in cents (e.g. 2000 = 20 €)
 */
export interface RequestPaymentAPI {
    type: PaymentType;
    proservice: string;
    oneid: string;
    recipient: string;
    amount: number;
    env?: "prod" | "dev";
}
export declare type PaymentRequest = {
    amount: number;
    date: number;
    oneid: string;
    paymentTicket: string;
    proservice: string;
    request_uuid: string;
    status: "done" | "waiting" | "failed";
};
//# sourceMappingURL=payment.d.ts.map