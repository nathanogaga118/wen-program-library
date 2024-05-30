use anyhow::Result;

use solana_client::nonblocking::rpc_client::RpcClient;
use solana_program::system_program::ID as SYSTEM_PROGRAM_ID;
use solana_sdk::{
    message::{v0::Message as TransactionMessage, VersionedMessage},
    signature::Keypair,
    signer::Signer,
    transaction::VersionedTransaction,
};
use spl_token_2022::ID as TOKEN_PROGRAM_ID;
use wen_new_standard::instructions::{AddRoyalties, AddRoyaltiesInstructionArgs};

use super::super::RoyaltyArgs;
use crate::{mint::parse_update_royalties_args, utils::derive_extra_metas_account};

pub async fn run(async_client: RpcClient, keypair: Keypair, args: RoyaltyArgs) -> Result<()> {
    let payer = keypair.pubkey();
    let recent_blockhash = async_client.get_latest_blockhash().await?;

    let mint_pubkey = args.mint;
    let keypair_pubkey = keypair.pubkey();

    let extra_metas_account = derive_extra_metas_account(&mint_pubkey);
    let add_royalties = AddRoyalties {
        payer: keypair_pubkey,
        authority: keypair_pubkey,
        mint: mint_pubkey,
        token_program: TOKEN_PROGRAM_ID,
        system_program: SYSTEM_PROGRAM_ID,
        extra_metas_account,
    };

    let update_royalties_args = parse_update_royalties_args(args.config_path)?;

    let add_royalties_ix = add_royalties.instruction(AddRoyaltiesInstructionArgs {
        args: update_royalties_args,
    });

    let transaction_message = VersionedMessage::V0(TransactionMessage::try_compile(
        &payer,
        &[add_royalties_ix],
        &[],
        recent_blockhash,
    )?);

    let transaction = VersionedTransaction::try_new(transaction_message, &[&keypair])?;

    let signature = async_client
        .send_and_confirm_transaction(&transaction)
        .await?;

    println!(
        "Added royalties for member mint {:?} successfully! Signature: {:?}",
        mint_pubkey.to_string(),
        signature
    );

    Ok(())
}
