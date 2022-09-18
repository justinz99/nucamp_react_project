import { Col } from "reactstrap";

export default function Loading() {
    return (
        <Col>
            <i className="fa fa-spinner faa-pulse fa-3x fa-fw text-primary" />
            <p>Loading...</p>
        </Col>
    )
}