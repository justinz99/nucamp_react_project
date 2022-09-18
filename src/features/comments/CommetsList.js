import { Row, Col } from 'reactstrap'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { useSelector } from 'react-redux'
import { selectCommentsByCampsiteId } from './CommentsSlice'

const CommentsList = ({campsiteId}) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId))
    const isLoading = useSelector(state => state.comments.isLoading)
    const errMsg = useSelector(state => state.comments.errMsg)

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <CommentForm campsiteId={campsiteId}>
                    
                </CommentForm>
            </Col>
        )
    }

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        )
    }
    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        )
    }

    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    )
}

export default CommentsList