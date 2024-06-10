/* eslint-disable */
import { wrappers } from "protobufjs";

export const protobufPackage = "place";

export interface PlaceUser {
  id: string;
  email: string;
  displayName: string;
  createdDateTimeUTC: Date | undefined;
  photoUrl?: string | undefined;
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
