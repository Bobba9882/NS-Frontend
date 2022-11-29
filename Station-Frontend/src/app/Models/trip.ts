export class Trip {
  isFavorite: boolean
  id: number
  tripId: number
  user: number
  ctxRecon: string
  plannedDurationInMinutes: string
  legs: TripInformation[]
}

export interface TripInformation {
  name: string
  direction: string
  cancelled: boolean
  origin: Station
  destination: Station
  stops: Station[]
}

export class Station {
  routeIdx: number
  namen: Namen
  name:string
  UICCode: string
  type: string
  plannedDateTime: string
  plannedTrack: string
}

export interface Namen {
  lang: string
  middel: string
  kort: string
}


