export interface PostBid{
    product_id: number,
    bid_status: string,
    isSettled?:boolean,
    userId:number,
    productName:string,
    biddingRate: number
} 