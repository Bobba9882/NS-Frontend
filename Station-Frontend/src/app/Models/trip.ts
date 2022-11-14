export class Trip{
  isFavorite: boolean
  id: number
  tripId: number
  user:number
  ctxRecon : string
  plannedDurationInMinutes : string
  legs : TripInformation[]
}

export interface TripInformation{
  name : string
  direction : string
  cancelled : boolean
  origin : Station
  destination : Station
  stops : Station[]
}

export interface Station{
  routeIdx : number
  name : string
  uicCode : string
  type : string
  plannedDateTime : string
  plannedTrack : string
}


