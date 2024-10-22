import { useEffect } from "react";
import { littlefoot } from "littlefoot";

export default () => {
  useEffect(() => {
    littlefoot();
  }, []);

  return null;
}
