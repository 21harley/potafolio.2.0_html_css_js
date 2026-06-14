const d = document;

export function $(selector) {
  return d.querySelector(selector);
}

export function $$(selector) {
  return d.querySelectorAll(selector);
}

export function on(target, event, handler) {
  target.addEventListener(event, handler);
}

export function setCSSVar(name, value) {
  d.documentElement.style.setProperty(name, value);
}
