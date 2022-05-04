export interface Bid{
    id: number,
    bid_status: string,
    isSettled: boolean,
    userId: number, 
    productName: string,
    biddingRate: number
}   