import { Button } from "../components/btnWidget/btnWidget";

test("Проверка создания кнопки", () => {
  document.body.innerHTML = `
  <div class="container">
  </div>
  `;

  const container = document.querySelector(".container");
  const testButton = new Button(container);

  testButton.createBtn("Click button test");
  const btn = container.querySelector(".btn-tooltip");

  expect(btn).not.toBeNull();
  expect(btn.textContent).toBe("Click button test");
});
