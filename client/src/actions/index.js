import axios from "axios";
import {
  getAvg,
  getLastAvg,
  getDiff,
  getTotal,
  getTotalAvg,
  getWeeksLeft,
  getFirstValue,
  getProgress
} from "../helpers/data.js";
import {
  FETCH_USER,
  UPDATE_LIST,
  ADD_LOG,
  FETCH_STATS,
  SHOW_MODAL
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/currentUser");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const showModal = val => async dispatch => {
  dispatch({ type: SHOW_MODAL, payload: { shown: val } });
};

export const fetchStats = data => async dispatch => {
  const user = await axios.get("/api/currentUser");
  let newData = {
    average: getAvg(data),
    lastAverage: getLastAvg(data),
    diff: getDiff(data),
    total: getTotal(data),
    averageWeek: getTotalAvg(data),
    timeLeft: getWeeksLeft(data, user.data.info.goal),
    first: getFirstValue(data),
    progress: getProgress(data, user.data.info.goal)
  };
  dispatch({ type: FETCH_STATS, payload: newData });
};

export const fetchUpdate = () => async dispatch => {
  const res = await axios.get("/api/getData");
  fetchStats(res.data)(dispatch);
  dispatch({ type: UPDATE_LIST, payload: res.data });
};

export const addLog = (value, date) => async dispatch => {
  const res = await axios.get("/api/addLog?date=" + date + "&value=" + value);
  dispatch({ type: ADD_LOG, payload: res.data });
  fetchUpdate()(dispatch);
};
