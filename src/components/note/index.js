import { createElementWithAttrs } from "../../utils";
import makeStyles from "./styles";

const styles = makeStyles({ dimension: 50 });

const component = isLine => {
  const clean = document.getElementById("$noteWrapper");
  clean && clean.remove();
  const $noteWrapper = createElementWithAttrs("div", [
    { attr: "id", value: "$noteWrapper" },
    { attr: "style", value: styles.noteWrapper(isLine) },
  ]);

  const $plic = createElementWithAttrs("div", [
    { attr: "id", value: "$plic" },
    { attr: "style", value: styles.plic },
  ]);

  const $circle = createElementWithAttrs("div", [
    { attr: "id", value: "$circle" },
    {
      attr: "style",
      value: styles.circle,
    },
  ]);
  $noteWrapper.appendChild($plic);
  $noteWrapper.appendChild($circle);

  return $noteWrapper;
};

export default component;
