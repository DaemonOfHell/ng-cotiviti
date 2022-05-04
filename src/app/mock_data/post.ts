export interface Offer {
    userId: number;
    offered_price: number;
}

export interface Post {
    id: number;
    bid_status: string;
    isSettled?: any;
    userId: number;
    productName: string;
    started_at: number;
    biddingRate: number;
    top_bids: Offer[];
}
