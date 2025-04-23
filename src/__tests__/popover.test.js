import { Popover } from '../components/popover/popover';

describe('Popover', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="container"></div>';
    let button = document.createElement('button');
    document.body.appendChild(button);
    let popover = new Popover(button, 'Test title', 'Test text');
  });

  afterEach(() => {
    document.body.removeChild(button);
    popover.removePopover();
  });

  test('Проверка создания поповера при клике на кнопку', () => {
    button.click();
    expect(document.body.querySelector('.popover')).toBeInTheDocument();
  });

  test('Проверка содержимого поповера', () => {
    button.click();
    const popoverElement = document.body.querySelector('.popover');
    const popoverElementTitle = document.body.querySelector('.popoverTitle');
    const popoverElementText = document.body.querySelector('.popoverText');
    
    expect(popoverElement).toBeInTheDocument();
    expect(popoverElementTitle.textContent).toBe('Test title');
    expect(popoverElementText.textContent).toBe('Test text');
  });

  test('Проверка удаления поповера при повторном клике на кнопку', () => {
    button.click();
    expect(document.body.querySelector('.popover')).toBeInTheDocument();

    button.click();
    expect(document.body.querySelector('.popover')).not.toBeInTheDocument();
  });

  test('Проверка позиционирования поповера относительно кнопки', () => {
    button.style.position = 'absolute';
    button.style.left = '100px';
    button.style.top = '100px';

    button.click();

    const popoverElement = document.body.querySelector('.popover');
    const { left, top } = popoverElement.getBoundingClientRect();

    expect(left).toBeCloseTo(100);
    expect(top).toBeCloseTo(90);
  });
});