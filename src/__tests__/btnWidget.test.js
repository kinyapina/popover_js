import { Button } from '../components/btnWidget/btnWidget';

test('Проверка создания кнопки', () => {
  const container = document.querySelector('.container');
  const testButton = new Button(container);

  testButton.createBtn('Click button test');

  expect(container.querySelector('.btn-tooltip')).toBeInTheDocument();
});