// Reverse Words · День 2 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию reverseWords(sentence), которая переставляет слова
// в предложении в обратном порядке. Сами слова не переворачиваются,
// разделитель — один пробел.
//
//   reverseWords('я учу JavaScript')    → 'JavaScript учу я'
//   reverseWords('раз два три четыре')  → 'четыре три два раз'
//
// Как проверить себя: запустите `node reverse-words.js` в терминале
// или скопируйте весь файл в консоль браузера.

function reverseWords(sentence) {
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

check("reverseWords('я учу JavaScript')", reverseWords('я учу JavaScript'), 'JavaScript учу я');
check("reverseWords('раз два три четыре')", reverseWords('раз два три четыре'), 'четыре три два раз');
check("reverseWords('Москва 2014 год')", reverseWords('Москва 2014 год'), 'год 2014 Москва');
check('одно слово', reverseWords('привет'), 'привет');
check('пустая строка', reverseWords(''), '');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
