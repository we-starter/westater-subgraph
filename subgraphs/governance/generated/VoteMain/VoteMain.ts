// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Claimed extends ethereum.Event {
  get params(): Claimed__Params {
    return new Claimed__Params(this);
  }
}

export class Claimed__Params {
  _event: Claimed;

  constructor(event: Claimed) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get propID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get realVol(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CreatePropose extends ethereum.Event {
  get params(): CreatePropose__Params {
    return new CreatePropose__Params(this);
  }
}

export class CreatePropose__Params {
  _event: CreatePropose;

  constructor(event: CreatePropose) {
    this._event = event;
  }

  get propID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get subject(): string {
    return this._event.parameters[1].value.toString();
  }

  get content(): string {
    return this._event.parameters[2].value.toString();
  }

  get NFTtokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get iwoAmountUSDT(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get warPrice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get stakeAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get begin(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class GovernorshipTransferred extends ethereum.Event {
  get params(): GovernorshipTransferred__Params {
    return new GovernorshipTransferred__Params(this);
  }
}

export class GovernorshipTransferred__Params {
  _event: GovernorshipTransferred;

  constructor(event: GovernorshipTransferred) {
    this._event = event;
  }

  get previousGovernor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newGovernor(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Vote extends ethereum.Event {
  get params(): Vote__Params {
    return new Vote__Params(this);
  }
}

export class Vote__Params {
  _event: Vote;

  constructor(event: Vote) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get propID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get voteType(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class VoteMain__getVotesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class VoteMain__propConfsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class VoteMain__proposesResult {
  value0: Address;
  value1: BigInt;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    return map;
  }
}

export class VoteMain__usersResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class VoteMain extends ethereum.SmartContract {
  static bind(address: Address): VoteMain {
    return new VoteMain("VoteMain", address);
  }

  NFT(): Address {
    let result = super.call("NFT", "NFT():(address)", []);

    return result[0].toAddress();
  }

  try_NFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("NFT", "NFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  airPercent(): BigInt {
    let result = super.call("airPercent", "airPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_airPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("airPercent", "airPercent():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createAmoutPercent(): BigInt {
    let result = super.call(
      "createAmoutPercent",
      "createAmoutPercent():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_createAmoutPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createAmoutPercent",
      "createAmoutPercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPropUri(propID: BigInt): string {
    let result = super.call("getPropUri", "getPropUri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(propID)
    ]);

    return result[0].toString();
  }

  try_getPropUri(propID: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getPropUri", "getPropUri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(propID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getResult(propID: BigInt): BigInt {
    let result = super.call("getResult", "getResult(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(propID)
    ]);

    return result[0].toBigInt();
  }

  try_getResult(propID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getResult", "getResult(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(propID)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVotes(propID: BigInt): VoteMain__getVotesResult {
    let result = super.call(
      "getVotes",
      "getVotes(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(propID)]
    );

    return new VoteMain__getVotesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getVotes(propID: BigInt): ethereum.CallResult<VoteMain__getVotesResult> {
    let result = super.tryCall(
      "getVotes",
      "getVotes(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(propID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VoteMain__getVotesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  governor(): Address {
    let result = super.call("governor", "governor():(address)", []);

    return result[0].toAddress();
  }

  try_governor(): ethereum.CallResult<Address> {
    let result = super.tryCall("governor", "governor():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  myTotalStake(param0: Address): BigInt {
    let result = super.call("myTotalStake", "myTotalStake(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_myTotalStake(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "myTotalStake",
      "myTotalStake(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  propConfs(param0: BigInt): VoteMain__propConfsResult {
    let result = super.call(
      "propConfs",
      "propConfs(uint256):(uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new VoteMain__propConfsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_propConfs(
    param0: BigInt
  ): ethereum.CallResult<VoteMain__propConfsResult> {
    let result = super.tryCall(
      "propConfs",
      "propConfs(uint256):(uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VoteMain__propConfsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  proposeCount(): BigInt {
    let result = super.call("proposeCount", "proposeCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_proposeCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("proposeCount", "proposeCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposes(param0: BigInt): VoteMain__proposesResult {
    let result = super.call(
      "proposes",
      "proposes(uint256):(address,uint256,string,string,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new VoteMain__proposesResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt()
    );
  }

  try_proposes(param0: BigInt): ethereum.CallResult<VoteMain__proposesResult> {
    let result = super.tryCall(
      "proposes",
      "proposes(uint256):(address,uint256,string,string,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VoteMain__proposesResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt()
      )
    );
  }

  routerAddr(): Address {
    let result = super.call("routerAddr", "routerAddr():(address)", []);

    return result[0].toAddress();
  }

  try_routerAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("routerAddr", "routerAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakeToken(): Address {
    let result = super.call("stakeToken", "stakeToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakeToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakeToken", "stakeToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  successPercent(): BigInt {
    let result = super.call("successPercent", "successPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_successPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "successPercent",
      "successPercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  thresholdPropose(): BigInt {
    let result = super.call(
      "thresholdPropose",
      "thresholdPropose():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_thresholdPropose(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "thresholdPropose",
      "thresholdPropose():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  usdtAddr(): Address {
    let result = super.call("usdtAddr", "usdtAddr():(address)", []);

    return result[0].toAddress();
  }

  try_usdtAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdtAddr", "usdtAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userProps(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "userProps",
      "userProps(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_userProps(param0: Address, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userProps",
      "userProps(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userPropsCount(param0: Address): BigInt {
    let result = super.call(
      "userPropsCount",
      "userPropsCount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_userPropsCount(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userPropsCount",
      "userPropsCount(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  users(param0: BigInt, param1: Address): VoteMain__usersResult {
    let result = super.call(
      "users",
      "users(uint256,address):(uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new VoteMain__usersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_users(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<VoteMain__usersResult> {
    let result = super.tryCall(
      "users",
      "users(uint256,address):(uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VoteMain__usersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }

  voteEndToClaimSpan(): BigInt {
    let result = super.call(
      "voteEndToClaimSpan",
      "voteEndToClaimSpan():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_voteEndToClaimSpan(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "voteEndToClaimSpan",
      "voteEndToClaimSpan():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  voteSpan(): BigInt {
    let result = super.call("voteSpan", "voteSpan():(uint256)", []);

    return result[0].toBigInt();
  }

  try_voteSpan(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("voteSpan", "voteSpan():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class __Governable_init_unchainedCall extends ethereum.Call {
  get inputs(): __Governable_init_unchainedCall__Inputs {
    return new __Governable_init_unchainedCall__Inputs(this);
  }

  get outputs(): __Governable_init_unchainedCall__Outputs {
    return new __Governable_init_unchainedCall__Outputs(this);
  }
}

export class __Governable_init_unchainedCall__Inputs {
  _call: __Governable_init_unchainedCall;

  constructor(call: __Governable_init_unchainedCall) {
    this._call = call;
  }

  get governor_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class __Governable_init_unchainedCall__Outputs {
  _call: __Governable_init_unchainedCall;

  constructor(call: __Governable_init_unchainedCall) {
    this._call = call;
  }
}

export class __VoteMain_initCall extends ethereum.Call {
  get inputs(): __VoteMain_initCall__Inputs {
    return new __VoteMain_initCall__Inputs(this);
  }

  get outputs(): __VoteMain_initCall__Outputs {
    return new __VoteMain_initCall__Outputs(this);
  }
}

export class __VoteMain_initCall__Inputs {
  _call: __VoteMain_initCall;

  constructor(call: __VoteMain_initCall) {
    this._call = call;
  }

  get _governor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _stakeToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _NFT(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class __VoteMain_initCall__Outputs {
  _call: __VoteMain_initCall;

  constructor(call: __VoteMain_initCall) {
    this._call = call;
  }
}

export class __VoteMain_init_unchainedCall extends ethereum.Call {
  get inputs(): __VoteMain_init_unchainedCall__Inputs {
    return new __VoteMain_init_unchainedCall__Inputs(this);
  }

  get outputs(): __VoteMain_init_unchainedCall__Outputs {
    return new __VoteMain_init_unchainedCall__Outputs(this);
  }
}

export class __VoteMain_init_unchainedCall__Inputs {
  _call: __VoteMain_init_unchainedCall;

  constructor(call: __VoteMain_init_unchainedCall) {
    this._call = call;
  }

  get _stakeToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _NFT(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _thresholdPropose(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _voteSpan(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _voteEndToClaimSpan(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _createAmoutPercent(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _airPercent(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _successPercent(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class __VoteMain_init_unchainedCall__Outputs {
  _call: __VoteMain_init_unchainedCall;

  constructor(call: __VoteMain_init_unchainedCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get propID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ProposeCall extends ethereum.Call {
  get inputs(): ProposeCall__Inputs {
    return new ProposeCall__Inputs(this);
  }

  get outputs(): ProposeCall__Outputs {
    return new ProposeCall__Outputs(this);
  }
}

export class ProposeCall__Inputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get subject(): string {
    return this._call.inputValues[0].value.toString();
  }

  get content(): string {
    return this._call.inputValues[1].value.toString();
  }

  get NFTtokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get iwoAmountUSDT(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get warPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get stakeAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get begin(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ProposeCall__Outputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }
}

export class RenounceGovernorshipCall extends ethereum.Call {
  get inputs(): RenounceGovernorshipCall__Inputs {
    return new RenounceGovernorshipCall__Inputs(this);
  }

  get outputs(): RenounceGovernorshipCall__Outputs {
    return new RenounceGovernorshipCall__Outputs(this);
  }
}

export class RenounceGovernorshipCall__Inputs {
  _call: RenounceGovernorshipCall;

  constructor(call: RenounceGovernorshipCall) {
    this._call = call;
  }
}

export class RenounceGovernorshipCall__Outputs {
  _call: RenounceGovernorshipCall;

  constructor(call: RenounceGovernorshipCall) {
    this._call = call;
  }
}

export class SetRouterCall extends ethereum.Call {
  get inputs(): SetRouterCall__Inputs {
    return new SetRouterCall__Inputs(this);
  }

  get outputs(): SetRouterCall__Outputs {
    return new SetRouterCall__Outputs(this);
  }
}

export class SetRouterCall__Inputs {
  _call: SetRouterCall;

  constructor(call: SetRouterCall) {
    this._call = call;
  }

  get _router(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _usdtAddr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetRouterCall__Outputs {
  _call: SetRouterCall;

  constructor(call: SetRouterCall) {
    this._call = call;
  }
}

export class TransferFeeCall extends ethereum.Call {
  get inputs(): TransferFeeCall__Inputs {
    return new TransferFeeCall__Inputs(this);
  }

  get outputs(): TransferFeeCall__Outputs {
    return new TransferFeeCall__Outputs(this);
  }
}

export class TransferFeeCall__Inputs {
  _call: TransferFeeCall;

  constructor(call: TransferFeeCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferFeeCall__Outputs {
  _call: TransferFeeCall;

  constructor(call: TransferFeeCall) {
    this._call = call;
  }
}

export class TransferGovernorshipCall extends ethereum.Call {
  get inputs(): TransferGovernorshipCall__Inputs {
    return new TransferGovernorshipCall__Inputs(this);
  }

  get outputs(): TransferGovernorshipCall__Outputs {
    return new TransferGovernorshipCall__Outputs(this);
  }
}

export class TransferGovernorshipCall__Inputs {
  _call: TransferGovernorshipCall;

  constructor(call: TransferGovernorshipCall) {
    this._call = call;
  }

  get newGovernor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferGovernorshipCall__Outputs {
  _call: TransferGovernorshipCall;

  constructor(call: TransferGovernorshipCall) {
    this._call = call;
  }
}

export class TransferStakeFeeCall extends ethereum.Call {
  get inputs(): TransferStakeFeeCall__Inputs {
    return new TransferStakeFeeCall__Inputs(this);
  }

  get outputs(): TransferStakeFeeCall__Outputs {
    return new TransferStakeFeeCall__Outputs(this);
  }
}

export class TransferStakeFeeCall__Inputs {
  _call: TransferStakeFeeCall;

  constructor(call: TransferStakeFeeCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferStakeFeeCall__Outputs {
  _call: TransferStakeFeeCall;

  constructor(call: TransferStakeFeeCall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get propID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get voteType(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}
