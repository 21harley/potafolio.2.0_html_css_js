import { $ } from './dom.js';

export function typewrite(selector, data, startCursor, interval) {
  let iterador = 0;
  let cursor = startCursor;
  const total = data.length;
  const timer = setInterval(() => {
    const item = $(selector);
    const aux = item.innerHTML.split('');
    aux[cursor] = data[iterador];
    item.innerHTML = aux.join('');
    cursor += 1;
    iterador += 1;
    if (iterador >= total) {
      clearInterval(timer);
    }
  }, interval);
}

export function typeClear(selector, startCursor, total, interval) {
  let iterador = 0;
  let cursor = startCursor;
  const timer = setInterval(() => {
    const item = $(selector);
    const aux = item.innerHTML.split('');
    if (cursor) {
      aux[cursor] = ' ';
    }
    item.innerHTML = aux.join('');
    cursor += 1;
    iterador += 1;
    if (iterador >= total) {
      clearInterval(timer);
    }
  }, interval);
}
