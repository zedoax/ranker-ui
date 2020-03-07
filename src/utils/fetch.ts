import {getUserToken} from "../redux/store";

export const post = (url: string, data: any, response_f: Function, data_f: Function) => {
  const user = getUserToken();
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response_f(response)
  ).then(data => data_f(data));
};

export const get = (url: string, response: Function, data: Function) =>
  fetch(url).then(_response => response(_response)).then(_data => data(_data));