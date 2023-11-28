/* eslint-disable */
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "place";

export interface Place {
  id: string;
  latitude: number;
  longitude: number;
  createdBy: PlaceUser | undefined;
  createdAt: Timestamp | undefined;
  updatedBy: PlaceUser | undefined;
  updatedAt: Timestamp | undefined;
  deletedBy?: PlaceUser | undefined;
  deletedAt?: Timestamp | undefined;
  name: string;
  nameTranslation?: PlaceNameTranslation | undefined;
  address?: PlaceAddress | undefined;
}

export interface PlaceUser {
  id: string;
  email: string;
  photoURL: string;
  displayName: string;
}

export interface PlaceNameTranslation {
  ko?: string | undefined;
  en?: string | undefined;
  ja?: string | undefined;
  zh?: string | undefined;
}

export interface PlaceAddress {
  roadNameAddress?: string | undefined;
  lotNumberAddress?: string | undefined;
}

export interface Wgs84Coordinates {
  latitude: number;
  longitude: number;
}

export const PLACE_PACKAGE_NAME = "place";
