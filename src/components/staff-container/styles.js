import theme from "../../styles/theme";

const styles = ({ dimensions: { primary } }) => {
  return {
    staffContainer: `
      padding: ${primary}px;
    `,
    stylesLines: `
      border-bottom: 5px solid black;
      cursor: pointer;
      position: relative;
    `,
    stylesSpaces: `
      height: ${primary / 2 + 1}px;
      cursor: pointer;
      display: flex;
      align-items: center;
      margin: 0;
      position: relative;
      `,
  };
};

export default theme(styles);
