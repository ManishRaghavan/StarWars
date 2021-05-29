import axios from "axios";

export function debounce(fn, limit = 500) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, limit);
  };
}

export const request = (query) => {
  return axios.get(`https://swapi.dev/api/people/?search=${query}`);
};
