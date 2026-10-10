// Cut Cut Cut · День 2 · 15 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию truncate(str, maxLength), которая укорачивает слишком
// длинную строку. Если в строке больше maxLength символов, обрежьте её
// и поставьте в конце многоточие «…» (это один символ) так, чтобы длина
// результата была ровно maxLength. Короткие строки верните без изменений.
//
//   truncate('Привет, мир!', 7)  → 'Привет…'
//   truncate('Котик', 10)        → 'Котик'
//
// Как проверить себя: запустите `node cut-cut-cut.js` в терминале
// или скопируйте весь файл в консоль браузера.

function truncate(str, maxLength) {
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

check("truncate('Привет, мир!', 7)", truncate('Привет, мир!', 7), 'Привет…');
check("truncate('Котик', 10)", truncate('Котик', 10), 'Котик');
check('строка ровно из maxLength символов не меняется', truncate('Москва', 6), 'Москва');
check("truncate('Сегодня второй день интенсива', 15)",
  truncate('Сегодня второй день интенсива', 15), 'Сегодня второй…');
check('длина результата равна maxLength', truncate('Сегодня второй день интенсива', 15).length, 15);
check('пустая строка', truncate('', 5), '');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
