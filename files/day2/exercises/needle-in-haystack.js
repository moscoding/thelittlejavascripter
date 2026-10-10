// Needle in Haystack · День 2 · 15 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// В стоге сена — массиве из чего угодно — спряталась строка 'needle' (иголка).
// Напишите функцию findNeedle(haystack), которая возвращает сообщение
// 'Иголка найдена на позиции N', где N — индекс первой иголки.
// Если иголки нет, верните 'Иголки здесь нет'.
//
//   findNeedle(['сено', 42, null, 'needle', true]) → 'Иголка найдена на позиции 3'
//   findNeedle([1, 2, 3])                          → 'Иголки здесь нет'
//
// Как проверить себя: запустите `node needle-in-haystack.js` в терминале
// или скопируйте весь файл в консоль браузера.

function findNeedle(haystack) {
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

check('иголка в середине', findNeedle(['сено', 42, null, 'needle', true]), 'Иголка найдена на позиции 3');
check('иголки нет', findNeedle([1, 2, 3]), 'Иголки здесь нет');
check('иголка в начале', findNeedle(['needle', 'сено']), 'Иголка найдена на позиции 0');
check('две иголки — позиция первой', findNeedle([0, 'needle', 'needle']), 'Иголка найдена на позиции 1');
check('похожие строки — не иголки', findNeedle(['need', 'needles', 'needle']), 'Иголка найдена на позиции 2');
check('пустой стог', findNeedle([]), 'Иголки здесь нет');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
