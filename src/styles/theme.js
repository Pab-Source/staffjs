const colors = { primary: "blue" };
const dimensions = { primary: 30 };

const theme = stylesFn => (attrs = {}) => {
  return stylesFn({ ...attrs, colors, dimensions });
};
export default theme;
