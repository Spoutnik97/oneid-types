/**
 * @param amount amount to request (US format: 5.54)
 * @param recipient email ou 06 of request recipient
 */
export interface LydiaRequest {
    message: string;
    payment_method?: "cb" | "lydia" | "auto";
    amount: string;
    recipient: string;
    vendor_token: string;
    provider_token: string;
    order_ref: string;
    currency: "EUR" | "GBP";
    type: "email" | "phone";
    confirm_url: string;
    cancel_url: string;
}
/**
 *
 * @param error	Set to 0 if there is no error.
 * @param request_id id of the request. You may need it to cancel the request
 * @param request_uuid UUID of the request. You may need it to check the request sate
 * @param message State of the request
 * @param mobile_url An url where you can redirect your user to let them pay. Lydia will handle if they already have an account or show the a credit card payment form.
 * @param order_ref Only if an order_ref was specified
 */
export interface LydiaResponse {
    error: string;
    request_id: string;
    request_uuid: string;
    message: string;
    mobile_url: string;
    order_ref: string;
}
/**
 * @param signed (0 or 1): tell if the request was sent with a valid signature or not. It's set to 0 most of the time : you can't sign a call to the api/request/do.json, it's reserverd to another Lydia product.
 * @param transaction_identifier (only on confirm url)
 * @param vendor_token (only if the request was made for a business)
 * @param order_ref (only if an order_ref was given)
 * @param sig a signature composed with all the posted parameters of this list (except sig)
 */
export interface LydiaWebhookPostRequest {
    currency: string;
    request_id: string;
    amount: string;
    signed: "0" | "1";
    transaction_identifier: string;
    vendor_token?: string;
    order_ref?: string;
    sig: string;
}
/**
 * @param request_id Id of the remote payment request
 * @param request_uuid UUID of the remote payment request
 * @param order_ref Order ref given of the remote payment request
 * @param vendor_token Vendor token of the business that done the request
 */
export declare type LydiaRequestState = {
    vendor_token: string;
} & ({
    request_id: string;
} | {
    request_uuid: string;
} | {
    order_ref: string;
});
export declare enum LydiaState {
    RequestAccepted = "1",
    WaitingToBeAccepted = "0",
    RefusedByPayer = "5",
    CancelledByOwner = "6",
    InvalidRequest = "-1"
}
/**
 * @param state
 * RequestAccepted = "1",
 * WaitingToBeAccepted = "0",
 * RefusedByPayer = "5",
 * CancelledByOwner = "6",
 * InvalidRequest = "-1",
 * @param used_ease_of_payment
 * yes : he did
 * no : he didn't
 * unknown : he hasn't pay yet so the option opens
 */
export interface LydiaRequestStateResponse {
    state: LydiaState;
    used_ease_of_payment: "yes" | "no" | "unkonwn";
}
//# sourceMappingURL=lydia.d.ts.map