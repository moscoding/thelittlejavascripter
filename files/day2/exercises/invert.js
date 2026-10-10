// Invert · День 2 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию invert(obj), которая возвращает новый объект, где ключи
// и значения поменялись местами. Исходный объект менять нельзя.
//
//   invert({ ru: 'Россия', fr: 'Франция' }) → { Россия: 'ru', Франция: 'fr' }
//   invert({ one: 1, two: 2 })             → { '1': 'one', '2': 'two' }
//
// Помните: ключи объекта всегда строки, поэтому числа превратятся в строки.
//
// Как проверить себя: запустите `node invert.js` в терминале
// или скопируйте весь файл в консоль браузера.

function invert(obj) {
  // ваш код
  return null;
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

check('страны', invert({ ru: 'Россия', fr: 'Франция' }), { Россия: 'ru', Франция: 'fr' });
check('числа становятся ключами-строками', invert({ one: 1, two: 2 }), { '1': 'one', '2': 'two' });
check('одинаковые значения — побеждает последний ключ', invert({ a: 'x', b: 'x' }), { x: 'b' });
check('пустой объект', invert({}), {});
const source = { cat: 'кот' };
invert(source);
check('исходный объект не изменился', source, { cat: 'кот' });

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
