// snake_case · День 2 · 30 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// В JavaScript переменные принято называть в camelCase, а в Python и в базах
// данных — в snake_case: слова строчными буквами через подчёркивание.
// Напишите функцию toSnakeCase(str), которая понимает три формата:
//
//   toSnakeCase('camelCase')          → 'camel_case'
//   toSnakeCase('PascalCase')         → 'pascal_case'
//   toSnakeCase('Words with spaces')  → 'words_with_spaces'
//
// Подсказка: заглавная буква внутри слова — начало нового слова.
// Пригодятся replace с регулярным выражением и toLowerCase.
//
// Как проверить себя: запустите `node snake-case.js` в терминале
// или скопируйте весь файл в консоль браузера.

function toSnakeCase(str) {
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

check("toSnakeCase('camelCase')", toSnakeCase('camelCase'), 'camel_case');
check("toSnakeCase('PascalCase')", toSnakeCase('PascalCase'), 'pascal_case');
check("toSnakeCase('Words with spaces')", toSnakeCase('Words with spaces'), 'words_with_spaces');
check("toSnakeCase('backgroundColorRed')", toSnakeCase('backgroundColorRed'), 'background_color_red');
check('уже snake_case — не меняется', toSnakeCase('already_snake'), 'already_snake');
check('одна буква', toSnakeCase('x'), 'x');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
