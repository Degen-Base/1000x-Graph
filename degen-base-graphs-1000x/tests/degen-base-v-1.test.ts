import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AddMargin } from "../generated/schema"
import { AddMargin as AddMarginEvent } from "../generated/DegenBaseV1/DegenBaseV1"
import { handleAddMargin } from "../src/degen-base-v-1"
import { createAddMarginEvent } from "./degen-base-v-1-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let margin = BigInt.fromI32(234)
    let newMargin = BigInt.fromI32(234)
    let newLeverage = BigInt.fromI32(234)
    let newAddMarginEvent = createAddMarginEvent(
      id,
      user,
      margin,
      newMargin,
      newLeverage
    )
    handleAddMargin(newAddMarginEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddMargin created and stored", () => {
    assert.entityCount("AddMargin", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddMargin",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddMargin",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "margin",
      "234"
    )
    assert.fieldEquals(
      "AddMargin",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newMargin",
      "234"
    )
    assert.fieldEquals(
      "AddMargin",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newLeverage",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
