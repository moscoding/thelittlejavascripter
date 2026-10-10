// Fizz Buzz · День 1 · 1 час · Домашка
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Игра на внимание: считаем от 1 до n, но число, которое делится на 3,
// заменяем словом 'Fizz', делящееся на 5 — словом 'Buzz', а делящееся
// и на 3, и на 5 — словом 'FizzBuzz'. Остальные числа остаются числами.
// Напишите функцию fizzBuzz(n), которая возвращает массив из n элементов.
//   fizzBuzz(5)  → [1, 2, 'Fizz', 4, 'Buzz']
//   fizzBuzz(15) → [..., 13, 14, 'FizzBuzz']
// Подсказка: «делится на 3» — это i % 3 === 0. Подумайте, какое условие
// проверять первым. Когда всё заработает, выведите fizzBuzz(100).
//
// Как проверить себя: запустите `node fizz-buzz.js` в терминале
// или скопируйте весь файл в консоль браузера.

function fizzBuzz(n) {
  const result = [];
  // ваш код
  return result;
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

const hundred = fizzBuzz(100);
check('fizzBuzz(5)', fizzBuzz(5), [1, 2, 'Fizz', 4, 'Buzz']);
check('fizzBuzz(15) заканчивается на FizzBuzz', fizzBuzz(15)[14], 'FizzBuzz');
check('fizzBuzz(0)', fizzBuzz(0), []);
check('fizzBuzz(100).length', hundred.length, 100);
check('первое число: 1', hundred[0], 1);
check('число 9', hundred[8], 'Fizz');
check('число 50', hundred[49], 'Buzz');
check('число 90', hundred[89], 'FizzBuzz');
check('число 97', hundred[96], 97);
check('число 100', hundred[99], 'Buzz');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
