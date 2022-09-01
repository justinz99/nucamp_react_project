import { Col } from 'reactstrap'
import Partner from './Partner'
import { selectAllPartners } from './partnersSlice'

export default function PartnersList() {
    const partners = selectAllPartners()
    return (
        <Col className='m-4'>
            {partners.map(partner => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner}/>
                    </div>
                )
            })}
        </Col>
    )
}