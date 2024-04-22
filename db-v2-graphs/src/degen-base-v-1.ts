import {
  AddMargin as AddMarginEvent,
  ClosePosition as ClosePositionEvent,
  FeeGenerated as FeeGeneratedEvent,
  LiquidatedOrder as LiquidatedOrderEvent,
  OpenOrder as OpenOrderEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PositionCreated as PositionCreatedEvent,
  ReduceMargin as ReduceMarginEvent,
  closedPositionsData as closedPositionsDataEvent
} from "../generated/DegenBaseV1/DegenBaseV1"
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
} from "../generated/schema"

export function handleAddMargin(event: AddMarginEvent): void {
  let entity = new AddMargin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.DegenBaseV1_id = event.params.id
  entity.user = event.params.user
  entity.margin = event.params.margin
  entity.newMargin = event.params.newMargin
  entity.newLeverage = event.params.newLeverage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClosePosition(event: ClosePositionEvent): void {
  let entity = new ClosePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.user = event.params.user
  entity.entry = event.params.entry
  entity.exit = event.params.exit
  entity.currency = event.params.currency
  entity.marketId = event.params.marketId
  entity.isLong = event.params.isLong
  entity.leverage = event.params.leverage
  entity.margin = event.params.margin
  entity.isActive = event.params.isActive
  entity.pnl = event.params.pnl
  entity.earning = event.params.earning
  entity.isLiquidated = event.params.isLiquidated

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeGenerated(event: FeeGeneratedEvent): void {
  let entity = new FeeGenerated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.currency = event.params.currency
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidatedOrder(event: LiquidatedOrderEvent): void {
  let entity = new LiquidatedOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.user = event.params.user
  entity.entry = event.params.entry
  entity.exit = event.params.exit
  entity.currency = event.params.currency
  entity.marketId = event.params.marketId
  entity.isLong = event.params.isLong
  entity.margin = event.params.margin
  entity.takeProfit = event.params.takeProfit
  entity.stopLoss = event.params.stopLoss
  entity.pnl = event.params.pnl
  entity.earning = event.params.earning

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOpenOrder(event: OpenOrderEvent): void {
  let entity = new OpenOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.user = event.params.user
  entity.marketId = event.params.marketId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePositionCreated(event: PositionCreatedEvent): void {
  let entity = new PositionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.user = event.params.user
  entity.currency = event.params.currency
  entity.marketId = event.params.marketId
  entity.entry = event.params.entry
  entity.isLong = event.params.isLong
  entity.leverage = event.params.leverage
  entity.orderType = event.params.orderType
  entity.margin = event.params.margin
  entity.takeProfit = event.params.takeProfit
  entity.stopLoss = event.params.stopLoss
  entity.isActive = event.params.isActive

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReduceMargin(event: ReduceMarginEvent): void {
  let entity = new ReduceMargin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.DegenBaseV1_id = event.params.id
  entity.user = event.params.user
  entity.margin = event.params.margin
  entity.newMargin = event.params.newMargin
  entity.newLeverage = event.params.newLeverage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleclosedPositionsData(
  event: closedPositionsDataEvent
): void {
  let entity = new closedPositionsData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.user = event.params.user
  entity.entry = event.params.entry
  entity.exit = event.params.exit
  entity.margin = event.params.margin
  entity.currency = event.params.currency
  entity.takeProfit = event.params.takeProfit
  entity.stopLoss = event.params.stopLoss

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
