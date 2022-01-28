export const DELETE = (data) => {
  return { type: "DELETE", payload: data };
};
export const DELETE_CONFIRM = (data) => {
  return { type: "DELETE_CONFIRM", payload: data };
};
export const FETCH_DATA = (data) => {
  return { type: "FETCH_DATA", payload: data };
};
export const EDIT = (data) => {
  return { type: "EDIT", payload: data };
};
export const EDIT_CONFIRM = (data) => {
  return { type: "EDIT_CONFIRM", payload: data };
};
export const SORT = () => {
  return { type: "SORT" };
};
export const CREATE = (data) => {
  return { type: "CREATE" , payload: data };
};