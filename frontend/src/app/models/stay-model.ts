export interface Stay {
  _id: string
  name: string;
  type: string;
  imgUrls: string[];
  price: number;
  summary: string;
  amenities: string[];
  roomType: string;
  host: Host;
  loc: Loc;
  reviews: Review[];
  likedByUsers: any[];
  labels: string[];
  stayDetails: StayDetails;
}

export interface StayDetails {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface Review {
  createdAt: string;
  by: By;
  txt: string;
  id: string;
  moreRate: MoreRate;
}

export interface MoreRate {
  [key: string]: number
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  checkIn: number;
  value: number;
}

export interface By {
  _id: string;
  fullname: string;
  imgUrl: string;
  id: string;
}

export interface Loc {
  country: string;
  countryCode: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
}

export interface Host {
  _id: string;
  fullname: string;
  imgUrl: string;
  isSuperHost: boolean;
}

export interface StayFilter {
  term: string
}