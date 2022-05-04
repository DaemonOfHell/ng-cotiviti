export interface BidApproval{
    id: number;
    bid_status: string;
    isSettled?: boolean;
    userId: number;
    product_id: number;
    biddingRate: number;
}