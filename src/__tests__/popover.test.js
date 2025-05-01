import { Popover } from "../components/popover/popover";

test("Проверка создания поповера при клике на кнопку", () => {
  document.body.innerHTML = `
    <div class='container'>
      <button class='button'></button>
    </div>
  `;
  let button = document.querySelector("button");
  new Popover(button, "Test title", "Test text");

  button.click();

  const popoverEl = document.body.querySelector(".popover");
  expect(popoverEl).not.toBe(null);
});

test("Проверка содержимого поповера", () => {
  document.body.innerHTML = `
    <div class='container'>
      <button class='button'></button>
    </div>
    `;
  let button = document.querySelector("button");
  new Popover(button, "Test title", "Test text");

  button.click();
  const popoverElement = document.body.querySelector(".popover");
  const popoverElementTitle = popoverElement.querySelector(".popoverTitle");
  const popoverElementText = popoverElement.querySelector(".popoverText");

  expect(popoverElementTitle.textContent).toBe("Test title");
  expect(popoverElementText.textContent).toBe("Test text");
});

test("Проверка удаления поповера при повторном клике на кнопку", () => {
  document.body.innerHTML = `
    <div class='container'>
      <button class='button'></button>
    </div>
    `;
  let button = document.querySelector("button");
  new Popover(button, "Test title", "Test text");

  button.click();
  button.click();
  expect(document.body.querySelector(".popover")).toBe(null);
});
