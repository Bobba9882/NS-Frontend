export interface Trip {
  source:                       string;
  trips:                        TripElement[];
  scrollRequestBackwardContext: string;
  scrollRequestForwardContext:  string;
  message:                      string;
}

export interface TripElement {
  uid:                      string;
  ctxRecon:                 string;
  plannedDurationInMinutes: number;
  actualDurationInMinutes:  number;
  transfers:                number;
  status:                   string;
  messages:                 Message[];
  legs:                     Leg[];
  overviewPolyLine:         OverviewPolyLine[];
  crowdForecast:            string;
  punctuality:              number;
  optimal:                  boolean;
  fareRoute:                FareRoute;
  fares:                    PurpleFare[];
  fareLegs:                 FareLeg[];
  productFare:              ProductFareElement;
  fareOptions:              FareOptions;
  bookingUrl:               BookingURL;
  type:                     string;
  shareUrl:                 BookingURL;
  realtime:                 boolean;
  travelAssistanceInfo:     TravelAssistanceInfo;
  routeId:                  string;
  registerJourney:          RegisterJourney;
}

export interface BookingURL {
  title: string;
  url:   string;
}

export interface FareLeg {
  origin:       FareLegDestination;
  destination:  FareLegDestination;
  operator:     string;
  productTypes: string[];
  fares:        ProductFareElement[];
}

export interface FareLegDestination {
  name:                          string;
  lng:                           number;
  lat:                           number;
  city:                          string;
  countryCode:                   string;
  uicCode:                       string;
  type:                          string;
  prognosisType:                 string;
  plannedTimeZoneOffset:         number;
  plannedDateTime:               string;
  actualTimeZoneOffset:          number;
  actualDateTime:                string;
  plannedTrack:                  string;
  actualTrack:                   string;
  exitSide:                      string;
  checkinStatus:                 string;
  travelAssistanceBookingInfo:   TravelAssistance;
  travelAssistanceMeetingPoints: string[];
  notes:                         DestinationNote[];
  quayCode:                      string;
}

export interface DestinationNote {
  value:                  string;
  key:                    string;
  noteType:               string;
  priority:               number;
  routeIdxFrom:           number;
  routeIdxTo:             number;
  link:                   BookingURL;
  isPresentationRequired: boolean;
  category:               string;
}

export interface TravelAssistance {
  name:                   string;
  tripLegIndex:           string;
  stationUic:             string;
  serviceTypeIds:         string[];
  defaultAssistanceValue: boolean;
  canChangeAssistance:    boolean;
  message:                string;
}

export interface ProductFareElement {
  priceInCents:                                 number;
  priceInCentsExcludingSupplement:              number;
  supplementInCents:                            number;
  buyableTicketPriceInCents:                    number;
  buyableTicketPriceInCentsExcludingSupplement: number;
  buyableTicketSupplementPriceInCents:          number;
  product:                                      string;
  travelClass:                                  string;
  discountType:                                 string;
  link:                                         string;
}

export interface FareOptions {
  isInternationalBookable:        boolean;
  isInternational:                boolean;
  isEticketBuyable:               boolean;
  isPossibleWithOvChipkaart:      boolean;
  isTotalPriceUnknown:            boolean;
  supplementsBasedOnSelectedFare: SupplementsBasedOnSelectedFare[];
  reasonEticketNotBuyable:        ReasonEticketNotBuyable;
  salesOptions:                   SalesOption[];
}

export interface ReasonEticketNotBuyable {
  reason:      string;
  description: string;
}

export interface SalesOption {
  type:               string;
  permilleFullTariff: number;
  recommendationText: string;
}

export interface SupplementsBasedOnSelectedFare {
  supplementPriceInCents: number;
  legIdx:                 string;
  fromUICCode:            string;
  toUICCode:              string;
  link:                   BookingURL;
}

export interface FareRoute {
  routeId:     string;
  origin:      FareRouteDestination;
  destination: FareRouteDestination;
}

export interface FareRouteDestination {
  varCode: number;
  name:    string;
}

export interface PurpleFare {
  priceInCents:                    number;
  product:                         string;
  travelClass:                     string;
  priceInCentsExcludingSupplement: number;
  discountType:                    string;
  supplementInCents:               number;
  link:                            string;
}

export interface Leg {
  idx:                        string;
  name:                       string;
  travelType:                 string;
  direction:                  string;
  cancelled:                  boolean;
  changePossible:             boolean;
  alternativeTransport:       boolean;
  journeyDetailRef:           string;
  origin:                     FareLegDestination;
  destination:                FareLegDestination;
  product:                    Product;
  notes:                      DestinationNote[];
  messages:                   Message[];
  stops:                      Stop[];
  steps:                      Step[];
  coordinates:                Array<number[]>;
  crowdForecast:              string;
  punctuality:                number;
  crossPlatformTransfer:      boolean;
  shorterStock:               boolean;
  changeCouldBePossible:      boolean;
  shorterStockWarning:        string;
  shorterStockClassification: string;
  journeyDetail:              JourneyDetail[];
  reachable:                  boolean;
  plannedDurationInMinutes:   number;
  travelAssistanceDeparture:  TravelAssistance;
  travelAssistanceArrival:    TravelAssistance;
  overviewPolyLine:           OverviewPolyLine[];
}

export interface JourneyDetail {
  type: string;
  link: BookingURL;
}

export interface Message {
  id:           string;
  externalId:   string;
  head:         string;
  text:         string;
  lead:         string;
  routeIdxFrom: number;
  routeIdxTo:   number;
  type:         string;
  startDate:    string;
  endDate:      string;
  startTime:    string;
  endTime:      string;
}

export interface OverviewPolyLine {
  lat: number;
  lng: number;
}

export interface Product {
  number:                     string;
  categoryCode:               string;
  shortCategoryName:          string;
  longCategoryName:           string;
  operatorCode:               string;
  operatorName:               string;
  operatorAdministrativeCode: number;
  type:                       string;
  displayName:                string;
}

export interface Step {
  distanceInMeters:  number;
  durationInSeconds: number;
  startLocation:     Location;
  endLocation:       Location;
  instructions:      string;
}

export interface Location {
  station:     Station;
  description: string;
}

export interface Station {
  uicCode:     string;
  stationCode: string;
  name:        string;
  coordinate:  OverviewPolyLine;
  countryCode: string;
}

export interface Stop {
  uicCode:                        string;
  name:                           string;
  lat:                            number;
  lng:                            number;
  countryCode:                    string;
  notes:                          StopNote[];
  routeIdx:                       number;
  departurePrognosisType:         string;
  plannedDepartureDateTime:       string;
  plannedDepartureTimeZoneOffset: number;
  actualDepartureDateTime:        string;
  actualDepartureTimeZoneOffset:  number;
  plannedArrivalDateTime:         string;
  plannedArrivalTimeZoneOffset:   number;
  actualArrivalDateTime:          string;
  actualArrivalTimeZoneOffset:    number;
  plannedPassingDateTime:         string;
  actualPassingDateTime:          string;
  arrivalPrognosisType:           string;
  actualDepartureTrack:           string;
  plannedDepartureTrack:          string;
  plannedArrivalTrack:            string;
  actualArrivalTrack:             string;
  departureDelayInSeconds:        number;
  arrivalDelayInSeconds:          number;
  cancelled:                      boolean;
  borderStop:                     boolean;
  passing:                        boolean;
  quayCode:                       string;
}

export interface StopNote {
  value:    string;
  key:      string;
  type:     string;
  priority: number;
}

export interface RegisterJourney {
  url:                        string;
  searchUrl:                  string;
  status:                     string;
  bicycleReservationRequired: boolean;
  availability:               Availability;
}

export interface Availability {
  seats:                 boolean;
  numberOfSeats:         number;
  bicycle:               boolean;
  numberOfBicyclePlaces: number;
}

export interface TravelAssistanceInfo {
  termsAndConditionsLink: string;
  tripRequestId:          number;
  isAssistanceRequired:   boolean;
}
