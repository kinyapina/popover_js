import './style.css';
import { Button } from './components/btnWidget/btnWidget';

const container = document.querySelector('.container');
const newBtn = new Button(container);

newBtn.createBtn('Click to toggle popover');

