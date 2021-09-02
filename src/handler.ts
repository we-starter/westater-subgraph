import { Transfer } from '../generated/WAR/ERC20'
import { Staked, Withdrawn } from '../generated/WAR-POOL-(DAO)-Pool/StakingPool'
import { Account, Pool, AccountPool } from '../generated/schema'
import { BigInt, Address, Bytes } from '@graphprotocol/graph-ts'


export function handlerTransfer(event: Transfer): void {
  let fromId = event.params.from.toHex()
  let toId = event.params.to.toHex()

  let fromAccount = Account.load(fromId)
  let toAccount = Account.load(toId)

  if(fromAccount == null) {
    fromAccount = new Account(toId)
    fromAccount.createdAt = event.block.timestamp
    fromAccount.address = event.params.to
    fromAccount.balance = BigInt.fromI32(0)
  }else{
    if(fromAccount.balance.ge(event.params.value)){
      fromAccount.balance = fromAccount.balance.minus(event.params.value)
    }else{
      fromAccount.balance = BigInt.fromI32(0)
    }
  }

  if(toAccount == null) {
    toAccount = new Account(toId)
    toAccount.createdAt = event.block.timestamp
    toAccount.address = event.params.to
    toAccount.balance = event.params.value
  }else{
    toAccount.balance = toAccount.balance.plus(event.params.value)
  }
  fromAccount.save()
  toAccount.save()
}

export function handlerStaked(event: Staked): void {
  let poolId = event.transaction.to.toHex()
  let pool = Pool.load(poolId)
  if(pool == null){
    pool = new Pool(poolId)
    pool.createdAt = event.block.timestamp
    pool.address = event.transaction.to.toHexString()
    pool.total = BigInt.fromI32(0)
    pool.amount = BigInt.fromI32(0)
  }

  let accountPoolId = event.transaction.to.toHex().concat(event.params.user.toHex())
  let accountPool = AccountPool.load(accountPoolId)
  if(accountPool == null ){
    accountPool = new AccountPool(accountPoolId)
    accountPool.accountAddress = event.params.user
    accountPool.poolAddress = event.transaction.to.toHexString()
    accountPool.pool = poolId
    accountPool.account = event.params.user.toHex()
    accountPool.createdAt = event.block.timestamp
    accountPool.amount = BigInt.fromI32(0)

    pool.total = pool.total.plus(BigInt.fromI32(1))
  }

  accountPool.amount = accountPool.amount.plus(event.params.amount)
  accountPool.save()

  pool.amount = pool.amount.plus(event.params.amount)
  pool.save()
}


export function handlerWithdrawn(event: Withdrawn): void {
  let poolId = event.transaction.to.toHex()
  let pool = Pool.load(poolId)
  if(pool == null){
    return
  }

  let accountPoolId = event.transaction.to.toHex().concat(event.params.user.toHex())
  let accountPool = AccountPool.load(accountPoolId)
  if(accountPool == null ){
    return 
  }

  accountPool.amount = accountPool.amount.minus(event.params.amount)
  accountPool.save()

  pool.amount = pool.amount.minus(event.params.amount)
  pool.save()
}