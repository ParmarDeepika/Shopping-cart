import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItems } from "../components/StoreItems"

export function Store() {
    return (<>   <Row>
            {storeItems.map((item) => (
                <Col key ={item.id}><StoreItems {...item}></StoreItems>
                </Col>  
            ))}
           
        </Row>
    </>
    )
}