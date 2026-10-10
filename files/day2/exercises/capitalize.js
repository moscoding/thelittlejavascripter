// Capitalize · День 2 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию capitalize(str), которая делает заглавной первую букву
// каждого слова. Слова разделены пробелами, остальные буквы не трогайте.
//
//   capitalize('мама мыла раму')       → 'Мама Мыла Раму'
//   capitalize('javaScript для всех')  → 'JavaScript Для Всех'
//
// Подсказка: пригодятся split, toUpperCase, slice и join.
//
// Как проверить себя: запустите `node capitalize.js` в терминале
// или скопируйте весь файл в консоль браузера.

function capitalize(str) {
  // ваш код
  return '';
}

// ─── Проверка (не меняйте код ниже) ───
let passed = 0;
let total = 0;
function check(name, actual, expected) {
  total++;
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    passed++;
    console.log('✓ ' + name);
  } else {
    console.log('✗ ' + name + ' — ожидалось ' + JSON.stringify(expected) +
      ', получено ' + JSON.stringify(actual));
  }
}

check("capitalize('мама мыла раму')", capitalize('мама мыла раму'), 'Мама Мыла Раму');
check("capitalize('javaScript для всех')", capitalize('javaScript для всех'), 'JavaScript Для Всех');
check("capitalize('привет')", capitalize('привет'), 'Привет');
check("capitalize('уже Готово')", capitalize('уже Готово'), 'Уже Готово');
check('два пробела подряд не ломают функцию', capitalize('два  пробела'), 'Два  Пробела');
check('пустая строка', capitalize(''), '');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
