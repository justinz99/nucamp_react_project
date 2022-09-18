import { Row, Col } from 'reactstrap'
import Partner from './Partner'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import { useSelector } from 'react-redux'
import { selectAllPartners } from './partnersSlice'

export default function PartnersList() {
    const partners = useSelector(selectAllPartners)
    const errMsg = useSelector(state => state.partners.errMsg)
    const isLoading = useSelector(state => state.partners.isLoading)

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })}
            </Row>
        </Col>
    )
}