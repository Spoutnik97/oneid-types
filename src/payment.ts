export type PaymentType = "lydia" | "ancv" | "helloasso";

/**
 * @param recipient is a phone number for Lydia request, or ANCV n° for ANCV request
 * @param amount is an integer in cents (e.g. 2000 = 20 €)
 */
export interface PaymentRequestAPI {
  type: PaymentType;
  proservice: string;
  oneid: string;
  recipient: string;
  amount: number;
  env?: "prod" | "dev";
}

export type PaymentResponseAPI =
  | {
      success: true;
      paymentTicket: string;
    }
  | {
      success: false;
      message: string;
    };

export type PaymentRequest = {
  type: PaymentType;
  amount: number;
  date: number;
  oneid: string;
  paymentTicket: string;
  proservice: string;
  request_uuid: string;
  status: "done" | "waiting" | "failed";
};
