export const push = (href) => {
  window.history.pushState({}, "", href);
};
