import start from "../../events/start";
import { createElementWithAttrs } from "../../utils";
import $note from "../note";
import makeStyles from "./styles";

const styles = makeStyles();

const component = () => {
  const scale = ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5"];

  const $staffContainer = createElementWithAttrs("div", [
    { attr: "id", value: "$staffContainer" },
  ]);

  $staffContainer.style = styles.staffContainer;

  for (let i = scale.length - 1; i >= 0; i--) {
    const isLine = i % 2 === 0;
    const newElement = createElementWithAttrs("div", [
      { attr: "id", value: `lineAndSpace_${i}` },
      {
        attr: "style",
        value: isLine ? styles.stylesLines : styles.stylesSpaces,
      },
    ]);
    newElement.addEventListener("click", () =>
      start(`${scale[i]}`, newElement, $note, isLine)
    );
    $staffContainer.append(newElement);
  }

  return $staffContainer;
};

export default component;
