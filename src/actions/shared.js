import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
} 