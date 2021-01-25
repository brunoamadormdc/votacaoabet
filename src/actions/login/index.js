export const addLogin = (data) => {
    return {
      type: '@login/ADD_LOGIN',
      payload: data
    }
}

export const voteOK = () => {
  return {
    type: '@login/VOTE_OK',
    payload: {}
  }
}