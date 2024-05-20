/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Account,
  Address,
  Codec,
  Decoder,
  EncodedAccount,
  Encoder,
  FetchAccountConfig,
  FetchAccountsConfig,
  MaybeAccount,
  MaybeEncodedAccount,
  ReadonlyUint8Array,
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  fixDecoderSize,
  fixEncoderSize,
  getAddressDecoder,
  getAddressEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  transformEncoder,
} from '@solana/web3.js';

export type TokenGroup = {
  discriminator: ReadonlyUint8Array;
  /** The authority that can sign to update the group */
  updateAuthority: Address;
  /**
   * The associated mint, used to counter spoofing to be sure that group
   * belongs to a particular mint
   */
  mint: Address;
  /** The current number of group members */
  size: number;
  /** The maximum number of group members */
  maxSize: number;
};

export type TokenGroupArgs = {
  /** The authority that can sign to update the group */
  updateAuthority: Address;
  /**
   * The associated mint, used to counter spoofing to be sure that group
   * belongs to a particular mint
   */
  mint: Address;
  /** The current number of group members */
  size: number;
  /** The maximum number of group members */
  maxSize: number;
};

export function getTokenGroupEncoder(): Encoder<TokenGroupArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['updateAuthority', getAddressEncoder()],
      ['mint', getAddressEncoder()],
      ['size', getU32Encoder()],
      ['maxSize', getU32Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: new Uint8Array([184, 107, 4, 187, 196, 55, 142, 134]),
    })
  );
}

export function getTokenGroupDecoder(): Decoder<TokenGroup> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['updateAuthority', getAddressDecoder()],
    ['mint', getAddressDecoder()],
    ['size', getU32Decoder()],
    ['maxSize', getU32Decoder()],
  ]);
}

export function getTokenGroupCodec(): Codec<TokenGroupArgs, TokenGroup> {
  return combineCodec(getTokenGroupEncoder(), getTokenGroupDecoder());
}

export function decodeTokenGroup<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>
): Account<TokenGroup, TAddress>;
export function decodeTokenGroup<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>
): MaybeAccount<TokenGroup, TAddress>;
export function decodeTokenGroup<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>
): Account<TokenGroup, TAddress> | MaybeAccount<TokenGroup, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getTokenGroupDecoder()
  );
}

export async function fetchTokenGroup<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<Account<TokenGroup, TAddress>> {
  const maybeAccount = await fetchMaybeTokenGroup(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeTokenGroup<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig
): Promise<MaybeAccount<TokenGroup, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeTokenGroup(maybeAccount);
}

export async function fetchAllTokenGroup(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<Account<TokenGroup>[]> {
  const maybeAccounts = await fetchAllMaybeTokenGroup(rpc, addresses, config);
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeTokenGroup(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig
): Promise<MaybeAccount<TokenGroup>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeTokenGroup(maybeAccount));
}
