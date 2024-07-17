/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

/** SizeExceedsMaxSize: Collection size exceeds max size. */
export const WEN_NEW_STANDARD_ERROR__SIZE_EXCEEDS_MAX_SIZE = 0x1770; // 6000
/** MaxSizeBelowCurrentSize: Max size cannot be reduced below current size. */
export const WEN_NEW_STANDARD_ERROR__MAX_SIZE_BELOW_CURRENT_SIZE = 0x1771; // 6001
/** CreatorShareInvalid: Creators shares must add up to 100. */
export const WEN_NEW_STANDARD_ERROR__CREATOR_SHARE_INVALID = 0x1772; // 6002
/** MissingApproveAccount: Missing approve account. */
export const WEN_NEW_STANDARD_ERROR__MISSING_APPROVE_ACCOUNT = 0x1773; // 6003
/** ExpiredApproveAccount: Approve account has expired. */
export const WEN_NEW_STANDARD_ERROR__EXPIRED_APPROVE_ACCOUNT = 0x1774; // 6004
/** InvalidField: Invalid field. You cannot use a public key as a field. */
export const WEN_NEW_STANDARD_ERROR__INVALID_FIELD = 0x1775; // 6005
/** CreatorAddressInvalid: The Address you provided is invalid. Please provide a valid address. */
export const WEN_NEW_STANDARD_ERROR__CREATOR_ADDRESS_INVALID = 0x1776; // 6006
/** RoyaltyBasisPointsInvalid: Royalty basis points must be less than or equal to 10000. */
export const WEN_NEW_STANDARD_ERROR__ROYALTY_BASIS_POINTS_INVALID = 0x1777; // 6007

export type WenNewStandardError =
  | typeof WEN_NEW_STANDARD_ERROR__CREATOR_ADDRESS_INVALID
  | typeof WEN_NEW_STANDARD_ERROR__CREATOR_SHARE_INVALID
  | typeof WEN_NEW_STANDARD_ERROR__EXPIRED_APPROVE_ACCOUNT
  | typeof WEN_NEW_STANDARD_ERROR__INVALID_FIELD
  | typeof WEN_NEW_STANDARD_ERROR__MAX_SIZE_BELOW_CURRENT_SIZE
  | typeof WEN_NEW_STANDARD_ERROR__MISSING_APPROVE_ACCOUNT
  | typeof WEN_NEW_STANDARD_ERROR__ROYALTY_BASIS_POINTS_INVALID
  | typeof WEN_NEW_STANDARD_ERROR__SIZE_EXCEEDS_MAX_SIZE;

let wenNewStandardErrorMessages:
  | Record<WenNewStandardError, string>
  | undefined;
if (process.env.NODE_ENV !== 'production') {
  wenNewStandardErrorMessages = {
    [WEN_NEW_STANDARD_ERROR__CREATOR_ADDRESS_INVALID]: `The Address you provided is invalid. Please provide a valid address.`,
    [WEN_NEW_STANDARD_ERROR__CREATOR_SHARE_INVALID]: `Creators shares must add up to 100.`,
    [WEN_NEW_STANDARD_ERROR__EXPIRED_APPROVE_ACCOUNT]: `Approve account has expired.`,
    [WEN_NEW_STANDARD_ERROR__INVALID_FIELD]: `Invalid field. You cannot use a public key as a field.`,
    [WEN_NEW_STANDARD_ERROR__MAX_SIZE_BELOW_CURRENT_SIZE]: `Max size cannot be reduced below current size.`,
    [WEN_NEW_STANDARD_ERROR__MISSING_APPROVE_ACCOUNT]: `Missing approve account.`,
    [WEN_NEW_STANDARD_ERROR__ROYALTY_BASIS_POINTS_INVALID]: `Royalty basis points must be less than or equal to 10000.`,
    [WEN_NEW_STANDARD_ERROR__SIZE_EXCEEDS_MAX_SIZE]: `Collection size exceeds max size.`,
  };
}

export function getWenNewStandardErrorMessage(
  code: WenNewStandardError
): string {
  if (process.env.NODE_ENV !== 'production') {
    return (wenNewStandardErrorMessages as Record<WenNewStandardError, string>)[
      code
    ];
  }

  return 'Error message not available in production bundles.';
}
