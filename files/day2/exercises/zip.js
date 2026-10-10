// Zi-i-i-i-p! · День 2 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию zipObject(keys, values), которая «застёгивает» два массива
// одинаковой длины в объект, как молнию: i-й ключ получает i-е значение.
// Если ключ повторяется, побеждает последнее значение.
//
//   zipObject(['name', 'age'], ['Вася', 30]) → { name: 'Вася', age: 30 }
//   zipObject([], [])                        → {}
//
// Как проверить себя: запустите `node zip.js` в терминале
// или скопируйте весь файл в консоль браузера.

function zipObject(keys, values) {
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

check("zipObject(['name', 'age'], ['Вася', 30])", zipObject(['name', 'age'], ['Вася', 30]), { name: 'Вася', age: 30 });
check('три пары', zipObject(['x', 'y', 'z'], [1, 2, 3]), { x: 1, y: 2, z: 3 });
check('значение — массив', zipObject(['tags'], [['js', 'css']]), { tags: ['js', 'css'] });
check('повторяющийся ключ', zipObject(['a', 'a'], [1, 2]), { a: 2 });
check('пустые массивы', zipObject([], []), {});

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
