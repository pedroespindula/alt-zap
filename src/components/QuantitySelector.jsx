import React, { useCallback } from "react"
import { Input, Button } from "antd"

export default ({ min = 0, max = 20, quantity, onQuantity }) => {
  const inc = useCallback(() => {
    const val = parseInt(quantity, 10)
    onQuantity(val >= max ? quantity : `${val + 1}`)
  }, [onQuantity, quantity, max])

  const dec = useCallback(() => {
    const val = parseInt(quantity, 10)
    onQuantity(val <= min ? quantity : `${val - 1}`)
  }, [onQuantity, quantity, min])

  return (
    <div className="flex w-20 ml2" style={{ minWidth: "80px" }}>
      <Button
        type="primary"
        className="ph2 pv1 mr1 tc"
        style={{ minWidth: "27px" }}
        onClick={dec}
      >
        -
      </Button>
      <Input value={quantity} className="pa1 tc" />
      <Button
        type="primary"
        className="ph2 pv1 ml1 tc"
        style={{ minWidth: "27px" }}
        onClick={inc}
      >
        +
      </Button>
    </div>
  )
}
