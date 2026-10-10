// Final Countdown · День 1 · 10 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Шаттл стоит на стартовой площадке! Напишите функцию countdown(n),
// которая с помощью цикла while отсчитывает от n до 1, а затем добавляет
// слово 'Поехали!'. Функция возвращает массив строк — по одной на каждую
// строчку отсчёта. Число превращается в строку так: String(5) → '5'.
//   countdown(3) → ['3', '2', '1', 'Поехали!']
//   countdown(0) → ['Поехали!']
//
// Как проверить себя: запустите `node final-countdown.js` в терминале
// или скопируйте весь файл в консоль браузера.

function countdown(n) {
  const lines = [];
  // ваш код: цикл while
  return lines;
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

const launch = countdown(5);
if (launch.length > 0) {
  console.log(launch.join('\n'));
}

check('countdown(3)', countdown(3), ['3', '2', '1', 'Поехали!']);
check('countdown(1)', countdown(1), ['1', 'Поехали!']);
check('countdown(0)', countdown(0), ['Поехали!']);
check('countdown(10).length', countdown(10).length, 11);
check('countdown(10) начинается с 10', countdown(10)[0], '10');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
