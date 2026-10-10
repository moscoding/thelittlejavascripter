// Uppercaser · День 1 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// У строк есть метод .toUpperCase(), который делает все буквы заглавными.
// Напишите функцию shout(str), которая возвращает строку заглавными буквами.
//   shout('привет') → 'ПРИВЕТ'     shout('js 2026') → 'JS 2026'
// Бонус: функция capitalize(str) делает заглавной только первую букву, а
// остальное оставляет как есть. Первый символ — str[0], остаток — str.slice(1).
// Не забудьте про пустую строку!
//   capitalize('москва') → 'Москва'     capitalize('') → ''
//
// Как проверить себя: запустите `node uppercaser.js` в терминале
// или скопируйте весь файл в консоль браузера.

function shout(str) {
  // ваш код
  return '';
}

function capitalize(str) {
  // бонус: ваш код
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

check("shout('привет')", shout('привет'), 'ПРИВЕТ');
check("shout('js 2026')", shout('js 2026'), 'JS 2026');
check("shout('УЖЕ ГРОМКО')", shout('УЖЕ ГРОМКО'), 'УЖЕ ГРОМКО');
check("бонус: capitalize('москва')", capitalize('москва'), 'Москва');
check("бонус: capitalize('javaScript')", capitalize('javaScript'), 'JavaScript');
check("бонус: capitalize('')", capitalize(''), '');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
