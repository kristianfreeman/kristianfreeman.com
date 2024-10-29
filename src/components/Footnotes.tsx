import { useEffect } from "react";
import { littlefoot } from "littlefoot";

export default () => {
  useEffect(() => {
    littlefoot({
      activateCallback: (popover, _button) => {
        popover.classList.add("not-prose");
      },
    });

    // Insane hack to animate elements that have a footnote inside of them
    // without breaking the background color on the popover
    setTimeout(() => {
      const littlefoots = document.querySelectorAll("span.littlefoot");

      for (const littlefoot of littlefoots) {
        // The parent element is a direct descendant of div.slide-enter-content
        // Sometimes it is one parent, sometimes two
        let parent: any = littlefoot.parentElement

        if (!parent.parentElement.classList.contains("slide-enter-content")) {
          while (parent.parentElement) {
            if (!parent.classList.contains("slide-enter-content")) {
              parent = parent.parentElement;
              break;
            }
          }
        }

        if (parent) {
          parent.style.opacity = "0";
          parent.style.animation = "slide-enter 1s both 1";
          parent.style.animationDelay = "0s";
          parent.addEventListener("animationend", () => {
            parent.style.opacity = "1";
            parent.style.animation = "";
            parent.style.animationDelay = "";
          });
        }
      }
    }, 500);
  }, []);

  return null;
}
