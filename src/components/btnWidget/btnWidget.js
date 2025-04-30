import './btn.css';
import { Popover } from '../popover/popover';

export class Button {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  createBtn(btnText) {
    const btn = document.createElement('button');

    btn.classList.add('btn-tooltip');
    btn.textContent = btnText;
    this.parentEl.append(btn);

    new Popover(btn, 'Popover title', "Add here's some amazing content. It's very engaging. Right?");
  };
}