import http from "k6/http";
import { sleep, check } from 'k6';

export const options = {
  vus: 1000,
  duration: "30s",
};

export default function() {
  let randomID = Math.random() * 10000000;
  let url = `http://localhost:3003/${randomID}`;
  let res = http.get(url);
  check(res, {
  	'is status 200': r => r.status === 200,
  	'transaction time < 200ms': r => r.timings.duration < 200,
    'transaction time < 500ms': r => r.timings.duration < 500,
    'transaction time < 1000ms': r => r.timings.duration < 1000,
    'transaction time < 2000ms': r => r.timings.duration < 2000,
  })
  sleep(1);
};