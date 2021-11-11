//ACTION TYPES

export const types = {
  SET_AUTHED_USER: "SET_AUTHED_USER",
};

export const setAuthedUser = (userId) => {
  return {
    type: types.SET_AUTHED_USER,
    payload: userId,
  };
};
