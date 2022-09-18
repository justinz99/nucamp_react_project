import { Col } from "reactstrap";

export default function Error({ errMsg }) {
    return (
        <Col>
            <h4>{errMsg}</h4>
        </Col>
    )
}