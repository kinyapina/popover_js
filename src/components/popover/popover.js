import "./popover.css";

export class Popover {
  constructor(element, title, popoverText) {
    this.button = element;
    this.popoverTitle = title;
    this.popoverText = popoverText;
    this.popover = null;

    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      this.togglePopover();
    });
  }

  createPopover() {
    this.popover = document.createElement("div");
    this.popover.classList.add("popover");
    this.popover.innerHTML = `
      <div class='popoverTitle'>${this.popoverTitle}</div>
      <div class='popoverText'>${this.popoverText}</div>
    `;
  }

  showPopover() {
    this.createPopover();
    document.body.append(this.popover);

    const { left, top, width } = this.button.getBoundingClientRect();
    const { height: popoverHeight, width: popoverWidth } =
      this.popover.getBoundingClientRect();
    const popoverLocation = left + width / 2;

    this.popover.style.left = popoverLocation - popoverWidth / 2 + "px";
    this.popover.style.top = top - popoverHeight - 10 + "px";
  }

  removePopover() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    }
  }

  togglePopover() {
    if (this.popover) {
      this.removePopover();
    } else {
      this.showPopover();
    }
  }
}
