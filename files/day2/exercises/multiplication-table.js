// Multiplication Table · День 2 · 1 час · Домашка
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию makeTable(), которая строит таблицу умножения — двумерный
// массив (массив массивов) размером 10×10, где table[i][j] равно i * j,
// а индексы i и j идут от 0 до 9. Используйте два вложенных цикла for.
//
//   const table = makeTable();
//   table[7][8] → 56
//   table[3]    → [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]
//
// Как проверить себя: запустите `node multiplication-table.js` в терминале
// или скопируйте весь файл в консоль браузера.

function makeTable() {
  // ваш код
  return [];
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

const table = makeTable();
function cell(i, j) {
  return table[i] ? table[i][j] : undefined;
}
check('в таблице 10 строк', table.length, 10);
check('в каждой строке 10 чисел', table.map(function (row) { return row.length; }), [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
check('table[7][8] === 56', cell(7, 8), 56);
check('table[9][9] === 81', cell(9, 9), 81);
check('table[0][5] === 0', cell(0, 5), 0);
check('строка table[3]', table[3], [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
