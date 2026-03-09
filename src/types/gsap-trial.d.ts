declare module "gsap-trial/SplitText" {
  import type { gsap } from "gsap";
  export class SplitText {
    constructor(target: gsap.DOMTarget, vars?: Record<string, unknown>);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}
