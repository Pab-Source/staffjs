export const createElementWithAttrs = (el, arrayAttrs = []) => {
  const newElement = document.createElement(el);
  arrayAttrs.forEach(item => {
    newElement.setAttribute(item.attr, item.value.trim());
  });
  return newElement;
};
