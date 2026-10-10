// String's Length · День 1 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Берём линейку: у каждой строки есть длина — свойство .length
// ('кот'.length → 3). Напишите функцию longer(a, b), которая возвращает
// более длинную из двух строк. Если длины равны, верните первую строку.
//   longer('кот', 'жираф') → 'жираф'
//   longer('abc', 'xyz')   → 'abc'
//   longer('', 'a')        → 'a'
//
// Как проверить себя: запустите `node sting-length.js` в терминале
// или скопируйте весь файл в консоль браузера.

function longer(a, b) {
  // ваш код
  return '';
}

// ─── Проверка (не меняйте код ниже) ───
let passed = 0;
let total = 0;

function check(name, actual, expected) {
  total++;
  const got = JSON.stringify(actual);
  const want = JSON.stringify(expected);
  if (got === want) {
    passed++;
    console.log('✓ ' + name);
  } else {
    console.log('✗ ' + name + ' — получено ' + got + ', ожидалось ' + want);
  }
}

check("longer('кот', 'жираф')", longer('кот', 'жираф'), 'жираф');
check("longer('линейка', 'карандаш')", longer('линейка', 'карандаш'), 'карандаш');
check("longer('JavaScript', 'Java')", longer('JavaScript', 'Java'), 'JavaScript');
check("longer('abc', 'xyz')", longer('abc', 'xyz'), 'abc');
check("longer('', 'a')", longer('', 'a'), 'a');
check("пробел — тоже символ: longer('a b', 'ab')", longer('a b', 'ab'), 'a b');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
