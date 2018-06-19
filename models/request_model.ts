
export class Request {
    req_id: number
    req_type:string
    district: string
    town: string
    area: string
    date: Date
    time: any
    cus_id: number
    map_area:any
    start_time:any
    end_time:any
    total_fly_time:any
    quality_category:string
    max_flight_time:string
    drone_recieved="pending";
    media_recieved="pending";
    media_confirmed="pending";
    completed ="pending"
}
