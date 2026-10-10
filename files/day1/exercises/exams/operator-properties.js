// Operator Properties · День 1 · 5 минут · Тест
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Операторы — это инструменты, и у каждого свои свойства. Для каждого
// оператора ниже заполните два поля:
//   арность — сколько у него операндов: 'унарный', 'бинарный' или 'тернарный';
//   позиция — где он стоит: 'префикс' (перед операндом), 'инфикс' (между
//   операндами) или 'постфикс' (после операнда).
// Пример: 'a + b' → ['бинарный', 'инфикс'].
// Части оператора ?: стоят между операндами — считайте его инфиксным.
//
// Как проверить себя: запустите `node operator-properties.js` в терминале
// или скопируйте весь файл в консоль браузера.

const answers = {
  'typeof x':  ['', ''],
  '!x':        ['', ''],
  '++x':       ['', ''],
  'x++':       ['', ''],
  '-x':        ['', ''],
  'a - b':     ['', ''],
  'a * b':     ['', ''],
  'a === b':   ['', ''],
  'a && b':    ['', ''],
  'a ? b : c': ['', ''],
  'a = b':     ['', ''],
  'k in obj':  ['', ''],
  'a ?? b':    ['', ''],
};

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

// Ключ ответов закодирован, чтобы не подглядывать: цифра — арность, буква — позиция
const arity = { 1: 'унарный', 2: 'бинарный', 3: 'тернарный' };
const position = { p: 'префикс', i: 'инфикс', s: 'постфикс' };
const key = '1p 1p 1p 1s 1p 2i 2i 2i 2i 3i 2i 2i 2i'.split(' ');

Object.keys(answers).forEach(function (op, index) {
  const given = (answers[op] || []).map(function (word) {
    return String(word).trim().toLowerCase();
  });
  const code = key[index];
  check(op, given, [arity[code[0]], position[code[1]]]);
});

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
