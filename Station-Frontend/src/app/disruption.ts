export interface Disruption {
  id:                            string;
  type:                          string;
  title:                         string;
  topic:                         string;
  isActive:                      boolean;
  registrationTime:              string;
  releaseTime:                   string;
  local:                         boolean;
  titleSections:                 Array<TitleSection[]>;
  start:                         string;
  end:                           string;
  period:                        string;
  phase:                         Phase;
  impact:                        Impact;
  expectedDuration:              ExpectedDuration;
  summaryAdditionalTravelTime:   AdditionalTravelTime;
  publicationSections:           PublicationSection[];
  timespans:                     Timespan[];
  alternativeTransportTimespans: AlternativeTransportTimespan[];
}

export interface AlternativeTransportTimespan {
  start:                string;
  end:                  string;
  alternativeTransport: AlternativeTransportTimespanAlternativeTransport;
}

export interface AlternativeTransportTimespanAlternativeTransport {
  location:   Location[];
  label:      string;
  shortLabel: string;
}

export interface Location {
  station:     Station;
  description: string;
}

export interface Station {
  uicCode:     string;
  stationCode: string;
  name:        string;
  coordinate:  Coordinate;
  countryCode: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface ExpectedDuration {
  description: string;
  endTime:     string;
}

export interface Impact {
  value: number;
}

export interface Phase {
  id:    string;
  label: string;
}

export interface PublicationSection {
  section:     Section;
  consequence: Consequence;
  sectionType: string;
}

export interface Consequence {
  section:     Section;
  description: string;
  level:       string;
}

export interface Section {
  stations:  Station[];
  direction: string;
}

export interface AdditionalTravelTime {
  label:                    string;
  shortLabel:               string;
  minimumDurationInMinutes: number;
  maximumDurationInMinutes: number;
}

export interface Timespan {
  start:                string;
  end:                  string;
  period:               string;
  situation:            Cause;
  cause:                Cause;
  additionalTravelTime: AdditionalTravelTime;
  alternativeTransport: TimespanAlternativeTransport;
  advices:              string[];
}

export interface TimespanAlternativeTransport {
  label:      string;
  shortLabel: string;
}

export interface Cause {
  label: string;
}

export interface TitleSection {
  type:  string;
  value: string;
}
