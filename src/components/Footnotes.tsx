import { useEffect } from "react";
import { littlefoot } from "littlefoot";

export default () => {
  useEffect(() => {
    littlefoot({
      activateCallback: (popover, _button) => {
        popover.classList.add("not-prose");
      },
    });
  }, []);

  return null;
}
