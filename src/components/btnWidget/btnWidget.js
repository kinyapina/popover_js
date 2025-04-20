import './btn.css';
import { Popover } from '../popover/popover';

export class Button {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.buttons = [];
    //this.onBtnClick = this.onBtnClick.bind();
  }

  createBtn(btnText) {
    const btn = document.createElement('button');

    btn.classList.add('btn-tooltip');
    btn.textContent = btnText;
    this.parentEl.append(btn);

    const popover = new Popover(btn, 'Popover title', "Add here's some amazing content. It's very engaging. Right?");
    console.log(popover);
    popover.togglePopover();

    //btn.addEventListener('click', this.onBtnClick);
  }

  /* onBtnClick(e) {
    e.preventDefault();
    console.log('CLICK');
    popover.showPopover(btn);    
  } */  
}