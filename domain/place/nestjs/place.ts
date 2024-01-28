/* eslint-disable */
import { wrappers } from "protobufjs";
import { PlaceUser } from "./place-user";

export const protobufPackage = "place";

export interface Place {
  placeId: string;
  latitude: number;
  longitude: number;
  createdBy: PlaceUser | undefined;
  createdAt: Date | undefined;
  updatedBy: PlaceUser | undefined;
  updatedAt: Date | undefined;
  deletedBy?: PlaceUser | undefined;
  deletedAt?: Date | undefined;
  name: string;
  nameTranslation?: PlaceNameTranslation | undefined;
  address?: PlaceAddress | undefined;
  distanceFromUser?: number | undefined;
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

wrappers[".google.protobuf.Timestamp"] = {
  fromObject(value: Date) {
    return { seconds: value.getTime() / 1000, nanos: (value.getTime() % 1000) * 1e6 };
  },
  toObject(message: { seconds: number; nanos: number }) {
    return new Date(message.seconds * 1000 + message.nanos / 1e6);
  },
} as any;
