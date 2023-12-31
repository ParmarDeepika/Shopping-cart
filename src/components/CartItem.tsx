import { Button,  Stack } from "react-bootstrap"

import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
type CartItemProps = {
    id: number,
    quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
    const item = storeItems.find(i => i.id === id)
    const {removeFromCart }= useShoppingCart()
    if (item == null) return null
    return (<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
        <div className="me-auto"> {item.name}
            {quantity > 1 && (<span className="text-muted"> x {quantity}</span>)}
            <div>{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>&times;</Button>
    </Stack>)
}