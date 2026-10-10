// WeIrD CaSe · День 2 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию weirdCase(str), которая пишет каждое слово «лесенкой»:
// буквы с чётными индексами (0, 2, 4…) — заглавные, с нечётными — строчные.
// Внимание: в каждом слове счёт индексов начинается заново с нуля.
// Слова разделены одним пробелом.
//
//   weirdCase('привет мир')  → 'ПрИвЕт МиР'
//   weirdCase('ЙОГУРТ')      → 'ЙоГуРт'
//
// Как проверить себя: запустите `node weird-case.js` в терминале
// или скопируйте весь файл в консоль браузера.

function weirdCase(str) {
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

check("weirdCase('привет мир')", weirdCase('привет мир'), 'ПрИвЕт МиР');
check("weirdCase('ЙОГУРТ')", weirdCase('ЙОГУРТ'), 'ЙоГуРт');
check("weirdCase('hello world wide')", weirdCase('hello world wide'), 'HeLlO WoRlD WiDe');
check('индекс начинается заново в каждом слове', weirdCase('кот и пёс'), 'КоТ И ПёС');
check("weirdCase('я')", weirdCase('я'), 'Я');
check('пустая строка', weirdCase(''), '');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
