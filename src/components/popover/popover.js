import './popover.css';

const popover = document.createElement('div');

export class Popover {
  constructor(element, title, popoverText) {
    this.element = element;
    this.title = title;
    this.popoverText = popoverText;
    this.popoverEl = null;

    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.togglePopover();
    });
  }

  createPopover() {
    //const popover = document.createElement('div');
    popover.classList.add('popover');
    popover.innerHTML = `
      <div class='popoverTitle'>${this.title}</div>
      <div class='popoverText'>${this.popoverText}</div>
    `;
  }  

  showPopover() {  
    //console.log(popover.getBoundingClientRect());
    const { right, top } = popover.getBoundingClientRect();

    popover.style.left = right + 5 + 'px';
    popover.style.top = top + popover.offsetHeight / 2 - popover.offsetHeight / 2 + 'px';
    
    document.body.appendChild(popover);
    this.popoverEl = popover;
  }

  removePopover() {
    if (this.popoverEl) {
      this.popoverEl.remove();
      this.popoverEl = null;
    }
  }

  togglePopover() {
    if (this.popoverEl) {
      this.removePopover();
    } else {
      this.showPopover();
    }
  }
}