/* eslint-disable */

export const protobufPackage = "common";

export interface ResponseInfo {
  /** 총 개수 */
  totalCount: number;
  /** 결과물의 개수 */
  resultCount: number;
  /** 요청시 전달된 페이지 수 */
  requestedPageNumber?:
    | number
    | undefined;
  /** 요청시 전달된 결과물 제한 수 */
  requestedLimitNumber?:
    | number
    | undefined;
  /** 요청시 전달된 커서 Id 값 */
  requestedCursorId?: string | undefined;
}

export const COMMON_PACKAGE_NAME = "common";
