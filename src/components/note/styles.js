import theme from "../../styles/theme";

const styles = ({ colors, dimensions: { primary } }) => {
  return {
    noteWrapper: isLine => `
			position: absolute;
			bottom: ${isLine ? "-13px" : "0px"};
			margin: 0;
			padding: 0;
			height: ${primary}px;
			width: ${primary / 2}px;
			display: inline-flex;
			flex-direction: column;
		`,
    plic: `
			flex-basis: 50%;
			border-right: 1px solid ${colors.primary};
		`,
    circle: `
			flex-basis: 50%;
			border: 1px solid ${colors.primary};
			background-color: ${colors.primary};
			border-top-left-radius: ${primary / 2}px;
			border-bottom-right-radius: ${primary / 2}px;
			border-bottom-left-radius: ${primary / 10}px;
		`,
  };
};

export default theme(styles);
