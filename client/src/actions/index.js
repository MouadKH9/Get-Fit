import axios from "axios";
import * as helpers from "../helpers/data.js";
import * as types from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/currentUser");
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const showSettings = (shown, attention = false) => async dispatch => {
  dispatch({ type: types.SHOW_SETTINGS, payload: { shown, attention } });
};

export const fetchStats = data => async dispatch => {
  const user = await axios.get("/api/currentUser");
  let newData = {
    average: helpers.getAvg(data),
    lastAverage: helpers.getLastAvg(data),
    diff: helpers.getDiff(data),
    total: helpers.getTotal(data),
    averageWeek: helpers.getTotalAvg(data),
    timeLeft: helpers.getWeeksLeft(data, user.data.info.goal),
    first: helpers.getFirstValue(data),
    progress: helpers.getProgress(data, user.data.info.goal)
  };
  dispatch({ type: types.FETCH_STATS, payload: newData });
};

export const fetchUpdate = () => async dispatch => {
  const res = await axios.get("/api/getData");
  fetchStats(res.data)(dispatch);
  dispatch({ type: types.UPDATE_LIST, payload: res.data });
};

export const addLog = (value, date) => async dispatch => {
  const res = await axios.get("/api/addLog?date=" + date + "&value=" + value);
  dispatch({ type: types.ADD_LOG, payload: res.data });
  fetchUpdate()(dispatch);
};
