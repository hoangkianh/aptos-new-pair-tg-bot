const { Aptos } = require('@aptos-labs/ts-sdk')

const aptos = new Aptos()
const transaction = await aptos.transferCoinTransaction({
  sender: alice,
  recipient: bob.accountAddress,
  amount: 100,
})

const transaction = await aptos.transferCoinTransaction({
  sender: alice,
  recipient: bob.accountAddress,
  amount: 100,
});
const pendingTransaction = await aptos.signAndSubmitTransaction({
  signer: alice,
  transaction,
});

const alice: Account = Account.generate();

// create the account on chain
await aptos.fundAccount({
  accountAddress: alice.accountAddress,
  amount: 100000000,
});
const bobAddress = "0xb0b";

// using sign and submit separately
const senderAuthenticator = aptos.transaction.sign({
  signer: alice,
  transaction,
});
