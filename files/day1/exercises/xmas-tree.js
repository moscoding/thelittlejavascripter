// Xmas Tree · День 1 · 20 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Олень просит нарядить для него ёлку. Напишите функцию xmasTree(n), которая
// рисует из звёздочек ёлку высотой n строк и добавляет под ней ствол '|'.
// В строке номер i (считая с 1) — 2 * i - 1 звёздочек, а перед ними столько
// пробелов, чтобы ёлка стояла ровно по центру. Пробелов в конце строк нет.
// Строки соединяются символом '\n' (после ствола его нет). xmasTree(3):
//     *
//    ***
//   *****
//     |
// Подсказка: строку из одинаковых символов можно собрать циклом: s = s + '*'.
//
// Как проверить себя: запустите `node xmas-tree.js` в терминале
// или скопируйте весь файл в консоль браузера.

function xmasTree(n) {
  let tree = '';
  // ваш код: циклы for
  return tree;
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

const picture = xmasTree(5);
if (picture) {
  console.log(picture);
}

check('xmasTree(1)', xmasTree(1), '*\n|');
check('xmasTree(3)', xmasTree(3), '  *\n ***\n*****\n  |');
check('xmasTree(5)', xmasTree(5),
  '    *\n   ***\n  *****\n *******\n*********\n    |');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
