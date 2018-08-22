import { withReduxSaga } from '#/redux/store'

const WithReduxSaga = (props) => props.children

export default withReduxSaga(WithReduxSaga)
