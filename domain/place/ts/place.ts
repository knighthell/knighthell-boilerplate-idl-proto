/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
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

function createBasePlace(): Place {
  return {
    placeId: "",
    latitude: 0,
    longitude: 0,
    createdBy: undefined,
    createdAt: undefined,
    updatedBy: undefined,
    updatedAt: undefined,
    deletedBy: undefined,
    deletedAt: undefined,
    name: "",
    nameTranslation: undefined,
    address: undefined,
    distanceFromUser: undefined,
  };
}

export const Place = {
  encode(message: Place, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    if (message.latitude !== 0) {
      writer.uint32(17).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(25).double(message.longitude);
    }
    if (message.createdBy !== undefined) {
      PlaceUser.encode(message.createdBy, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedBy !== undefined) {
      PlaceUser.encode(message.updatedBy, writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    if (message.deletedBy !== undefined) {
      PlaceUser.encode(message.deletedBy, writer.uint32(66).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(82).string(message.name);
    }
    if (message.nameTranslation !== undefined) {
      PlaceNameTranslation.encode(message.nameTranslation, writer.uint32(90).fork()).ldelim();
    }
    if (message.address !== undefined) {
      PlaceAddress.encode(message.address, writer.uint32(98).fork()).ldelim();
    }
    if (message.distanceFromUser !== undefined) {
      writer.uint32(104).int32(message.distanceFromUser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Place {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.placeId = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.latitude = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.longitude = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdBy = PlaceUser.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updatedBy = PlaceUser.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.deletedBy = PlaceUser.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.deletedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.name = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.nameTranslation = PlaceNameTranslation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.address = PlaceAddress.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.distanceFromUser = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Place {
    return {
      placeId: isSet(object.placeId) ? globalThis.String(object.placeId) : "",
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : 0,
      createdBy: isSet(object.createdBy) ? PlaceUser.fromJSON(object.createdBy) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedBy: isSet(object.updatedBy) ? PlaceUser.fromJSON(object.updatedBy) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      deletedBy: isSet(object.deletedBy) ? PlaceUser.fromJSON(object.deletedBy) : undefined,
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      nameTranslation: isSet(object.nameTranslation)
        ? PlaceNameTranslation.fromJSON(object.nameTranslation)
        : undefined,
      address: isSet(object.address) ? PlaceAddress.fromJSON(object.address) : undefined,
      distanceFromUser: isSet(object.distanceFromUser) ? globalThis.Number(object.distanceFromUser) : undefined,
    };
  },

  toJSON(message: Place): unknown {
    const obj: any = {};
    if (message.placeId !== "") {
      obj.placeId = message.placeId;
    }
    if (message.latitude !== 0) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== 0) {
      obj.longitude = message.longitude;
    }
    if (message.createdBy !== undefined) {
      obj.createdBy = PlaceUser.toJSON(message.createdBy);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedBy !== undefined) {
      obj.updatedBy = PlaceUser.toJSON(message.updatedBy);
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.deletedBy !== undefined) {
      obj.deletedBy = PlaceUser.toJSON(message.deletedBy);
    }
    if (message.deletedAt !== undefined) {
      obj.deletedAt = message.deletedAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.nameTranslation !== undefined) {
      obj.nameTranslation = PlaceNameTranslation.toJSON(message.nameTranslation);
    }
    if (message.address !== undefined) {
      obj.address = PlaceAddress.toJSON(message.address);
    }
    if (message.distanceFromUser !== undefined) {
      obj.distanceFromUser = Math.round(message.distanceFromUser);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Place>, I>>(base?: I): Place {
    return Place.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Place>, I>>(object: I): Place {
    const message = createBasePlace();
    message.placeId = object.placeId ?? "";
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    message.createdBy = (object.createdBy !== undefined && object.createdBy !== null)
      ? PlaceUser.fromPartial(object.createdBy)
      : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedBy = (object.updatedBy !== undefined && object.updatedBy !== null)
      ? PlaceUser.fromPartial(object.updatedBy)
      : undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.deletedBy = (object.deletedBy !== undefined && object.deletedBy !== null)
      ? PlaceUser.fromPartial(object.deletedBy)
      : undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    message.name = object.name ?? "";
    message.nameTranslation = (object.nameTranslation !== undefined && object.nameTranslation !== null)
      ? PlaceNameTranslation.fromPartial(object.nameTranslation)
      : undefined;
    message.address = (object.address !== undefined && object.address !== null)
      ? PlaceAddress.fromPartial(object.address)
      : undefined;
    message.distanceFromUser = object.distanceFromUser ?? undefined;
    return message;
  },
};

function createBasePlaceNameTranslation(): PlaceNameTranslation {
  return { ko: undefined, en: undefined, ja: undefined, zh: undefined };
}

export const PlaceNameTranslation = {
  encode(message: PlaceNameTranslation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ko !== undefined) {
      writer.uint32(10).string(message.ko);
    }
    if (message.en !== undefined) {
      writer.uint32(18).string(message.en);
    }
    if (message.ja !== undefined) {
      writer.uint32(26).string(message.ja);
    }
    if (message.zh !== undefined) {
      writer.uint32(34).string(message.zh);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaceNameTranslation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaceNameTranslation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ko = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.en = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ja = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zh = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaceNameTranslation {
    return {
      ko: isSet(object.ko) ? globalThis.String(object.ko) : undefined,
      en: isSet(object.en) ? globalThis.String(object.en) : undefined,
      ja: isSet(object.ja) ? globalThis.String(object.ja) : undefined,
      zh: isSet(object.zh) ? globalThis.String(object.zh) : undefined,
    };
  },

  toJSON(message: PlaceNameTranslation): unknown {
    const obj: any = {};
    if (message.ko !== undefined) {
      obj.ko = message.ko;
    }
    if (message.en !== undefined) {
      obj.en = message.en;
    }
    if (message.ja !== undefined) {
      obj.ja = message.ja;
    }
    if (message.zh !== undefined) {
      obj.zh = message.zh;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaceNameTranslation>, I>>(base?: I): PlaceNameTranslation {
    return PlaceNameTranslation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaceNameTranslation>, I>>(object: I): PlaceNameTranslation {
    const message = createBasePlaceNameTranslation();
    message.ko = object.ko ?? undefined;
    message.en = object.en ?? undefined;
    message.ja = object.ja ?? undefined;
    message.zh = object.zh ?? undefined;
    return message;
  },
};

function createBasePlaceAddress(): PlaceAddress {
  return { roadNameAddress: undefined, lotNumberAddress: undefined };
}

export const PlaceAddress = {
  encode(message: PlaceAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roadNameAddress !== undefined) {
      writer.uint32(10).string(message.roadNameAddress);
    }
    if (message.lotNumberAddress !== undefined) {
      writer.uint32(18).string(message.lotNumberAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaceAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaceAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roadNameAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lotNumberAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaceAddress {
    return {
      roadNameAddress: isSet(object.roadNameAddress) ? globalThis.String(object.roadNameAddress) : undefined,
      lotNumberAddress: isSet(object.lotNumberAddress) ? globalThis.String(object.lotNumberAddress) : undefined,
    };
  },

  toJSON(message: PlaceAddress): unknown {
    const obj: any = {};
    if (message.roadNameAddress !== undefined) {
      obj.roadNameAddress = message.roadNameAddress;
    }
    if (message.lotNumberAddress !== undefined) {
      obj.lotNumberAddress = message.lotNumberAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaceAddress>, I>>(base?: I): PlaceAddress {
    return PlaceAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaceAddress>, I>>(object: I): PlaceAddress {
    const message = createBasePlaceAddress();
    message.roadNameAddress = object.roadNameAddress ?? undefined;
    message.lotNumberAddress = object.lotNumberAddress ?? undefined;
    return message;
  },
};

function createBaseWgs84Coordinates(): Wgs84Coordinates {
  return { latitude: 0, longitude: 0 };
}

export const Wgs84Coordinates = {
  encode(message: Wgs84Coordinates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(17).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wgs84Coordinates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWgs84Coordinates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.latitude = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.longitude = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Wgs84Coordinates {
    return {
      latitude: isSet(object.latitude) ? globalThis.Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? globalThis.Number(object.longitude) : 0,
    };
  },

  toJSON(message: Wgs84Coordinates): unknown {
    const obj: any = {};
    if (message.latitude !== 0) {
      obj.latitude = message.latitude;
    }
    if (message.longitude !== 0) {
      obj.longitude = message.longitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Wgs84Coordinates>, I>>(base?: I): Wgs84Coordinates {
    return Wgs84Coordinates.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Wgs84Coordinates>, I>>(object: I): Wgs84Coordinates {
    const message = createBaseWgs84Coordinates();
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
