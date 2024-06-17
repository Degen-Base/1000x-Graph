import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AddMargin,
  ClosePosition,
  FeeGenerated,
  LiquidatedOrder,
  OpenOrder,
  OwnershipTransferred,
  PositionCreated,
  ReduceMargin,
  closedPositionsData
} from "../generated/DegenBaseV1/DegenBaseV1"

export function createAddMarginEvent(
  id: BigInt,
  user: Address,
  margin: BigInt,
  newMargin: BigInt,
  newLeverage: BigInt
): AddMargin {
  let addMarginEvent = changetype<AddMargin>(newMockEvent())

  addMarginEvent.parameters = new Array()

  addMarginEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  addMarginEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  addMarginEvent.parameters.push(
    new ethereum.EventParam("margin", ethereum.Value.fromUnsignedBigInt(margin))
  )
  addMarginEvent.parameters.push(
    new ethereum.EventParam(
      "newMargin",
      ethereum.Value.fromUnsignedBigInt(newMargin)
    )
  )
  addMarginEvent.parameters.push(
    new ethereum.EventParam(
      "newLeverage",
      ethereum.Value.fromUnsignedBigInt(newLeverage)
    )
  )

  return addMarginEvent
}

export function createClosePositionEvent(
  orderId: BigInt,
  user: Address,
  entry: BigInt,
  exit: BigInt,
  currency: Address,
  marketId: BigInt,
  isLong: boolean,
  leverage: BigInt,
  margin: BigInt,
  isActive: boolean,
  pnl: BigInt,
  earning: BigInt,
  isLiquidated: boolean
): ClosePosition {
  let closePositionEvent = changetype<ClosePosition>(newMockEvent())

  closePositionEvent.parameters = new Array()

  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("entry", ethereum.Value.fromUnsignedBigInt(entry))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("exit", ethereum.Value.fromUnsignedBigInt(exit))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "leverage",
      ethereum.Value.fromUnsignedBigInt(leverage)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("margin", ethereum.Value.fromUnsignedBigInt(margin))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam("pnl", ethereum.Value.fromUnsignedBigInt(pnl))
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "earning",
      ethereum.Value.fromUnsignedBigInt(earning)
    )
  )
  closePositionEvent.parameters.push(
    new ethereum.EventParam(
      "isLiquidated",
      ethereum.Value.fromBoolean(isLiquidated)
    )
  )

  return closePositionEvent
}

export function createFeeGeneratedEvent(
  amount: BigInt,
  currency: Address,
  timestamp: BigInt
): FeeGenerated {
  let feeGeneratedEvent = changetype<FeeGenerated>(newMockEvent())

  feeGeneratedEvent.parameters = new Array()

  feeGeneratedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  feeGeneratedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  feeGeneratedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return feeGeneratedEvent
}

export function createLiquidatedOrderEvent(
  orderId: BigInt,
  user: Address,
  entry: BigInt,
  exit: BigInt,
  currency: Address,
  marketId: BigInt,
  isLong: boolean,
  margin: BigInt,
  takeProfit: BigInt,
  stopLoss: BigInt,
  pnl: BigInt,
  earning: BigInt
): LiquidatedOrder {
  let liquidatedOrderEvent = changetype<LiquidatedOrder>(newMockEvent())

  liquidatedOrderEvent.parameters = new Array()

  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("entry", ethereum.Value.fromUnsignedBigInt(entry))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("exit", ethereum.Value.fromUnsignedBigInt(exit))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("margin", ethereum.Value.fromUnsignedBigInt(margin))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam(
      "takeProfit",
      ethereum.Value.fromUnsignedBigInt(takeProfit)
    )
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam(
      "stopLoss",
      ethereum.Value.fromUnsignedBigInt(stopLoss)
    )
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam("pnl", ethereum.Value.fromUnsignedBigInt(pnl))
  )
  liquidatedOrderEvent.parameters.push(
    new ethereum.EventParam(
      "earning",
      ethereum.Value.fromUnsignedBigInt(earning)
    )
  )

  return liquidatedOrderEvent
}

export function createOpenOrderEvent(
  positionId: BigInt,
  user: Address,
  marketId: BigInt
): OpenOrder {
  let openOrderEvent = changetype<OpenOrder>(newMockEvent())

  openOrderEvent.parameters = new Array()

  openOrderEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  openOrderEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  openOrderEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )

  return openOrderEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPositionCreatedEvent(
  orderId: BigInt,
  user: Address,
  currency: Address,
  marketId: BigInt,
  entry: BigInt,
  isLong: boolean,
  leverage: BigInt,
  orderType: BigInt,
  margin: BigInt,
  takeProfit: BigInt,
  stopLoss: BigInt,
  isActive: boolean
): PositionCreated {
  let positionCreatedEvent = changetype<PositionCreated>(newMockEvent())

  positionCreatedEvent.parameters = new Array()

  positionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketId",
      ethereum.Value.fromUnsignedBigInt(marketId)
    )
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam("entry", ethereum.Value.fromUnsignedBigInt(entry))
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam("isLong", ethereum.Value.fromBoolean(isLong))
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "leverage",
      ethereum.Value.fromUnsignedBigInt(leverage)
    )
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderType",
      ethereum.Value.fromUnsignedBigInt(orderType)
    )
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam("margin", ethereum.Value.fromUnsignedBigInt(margin))
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "takeProfit",
      ethereum.Value.fromUnsignedBigInt(takeProfit)
    )
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stopLoss",
      ethereum.Value.fromUnsignedBigInt(stopLoss)
    )
  )
  positionCreatedEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )

  return positionCreatedEvent
}

export function createReduceMarginEvent(
  id: BigInt,
  user: Address,
  margin: BigInt,
  newMargin: BigInt,
  newLeverage: BigInt
): ReduceMargin {
  let reduceMarginEvent = changetype<ReduceMargin>(newMockEvent())

  reduceMarginEvent.parameters = new Array()

  reduceMarginEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  reduceMarginEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  reduceMarginEvent.parameters.push(
    new ethereum.EventParam("margin", ethereum.Value.fromUnsignedBigInt(margin))
  )
  reduceMarginEvent.parameters.push(
    new ethereum.EventParam(
      "newMargin",
      ethereum.Value.fromUnsignedBigInt(newMargin)
    )
  )
  reduceMarginEvent.parameters.push(
    new ethereum.EventParam(
      "newLeverage",
      ethereum.Value.fromUnsignedBigInt(newLeverage)
    )
  )

  return reduceMarginEvent
}

export function createclosedPositionsDataEvent(
  orderId: BigInt,
  user: Address,
  entry: BigInt,
  exit: BigInt,
  margin: BigInt,
  currency: Address,
  takeProfit: BigInt,
  stopLoss: BigInt
): closedPositionsData {
  let closedPositionsDataEvent = changetype<closedPositionsData>(newMockEvent())

  closedPositionsDataEvent.parameters = new Array()

  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam("entry", ethereum.Value.fromUnsignedBigInt(entry))
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam("exit", ethereum.Value.fromUnsignedBigInt(exit))
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam("margin", ethereum.Value.fromUnsignedBigInt(margin))
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam(
      "takeProfit",
      ethereum.Value.fromUnsignedBigInt(takeProfit)
    )
  )
  closedPositionsDataEvent.parameters.push(
    new ethereum.EventParam(
      "stopLoss",
      ethereum.Value.fromUnsignedBigInt(stopLoss)
    )
  )

  return closedPositionsDataEvent
}
