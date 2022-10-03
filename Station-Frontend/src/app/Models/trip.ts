export interface Trips {
  trips : Trip[];
}

export interface Trip{
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


