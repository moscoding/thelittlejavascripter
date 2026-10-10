// Check for Spam · День 2 · 20 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию isSpam(text, stopWords). Она возвращает true, если в тексте
// встречается хотя бы одно стоп-слово из массива stopWords, и false — если нет.
// Регистр букв не важен: «КАЗИНО», «Казино» и «казино» — одно и то же.
//
//   const stop = ['бесплатно', 'выигрыш', 'казино'];
//   isSpam('Только сегодня БЕСПЛАТНО!', stop)    → true
//   isSpam('Встречаемся в шесть у метро', stop)  → false
//
// Как проверить себя: запустите `node check-for-spam.js` в терминале
// или скопируйте весь файл в консоль браузера.

function isSpam(text, stopWords) {
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

const stop = ['бесплатно', 'выигрыш', 'казино'];
check('находит слово в другом регистре', isSpam('Только сегодня БЕСПЛАТНО!', stop), true);
check('обычное сообщение — не спам', isSpam('Встречаемся в шесть у метро', stop), false);
check('регистр перемешан', isSpam('Ваш ВыИгРыШ ждёт вас', stop), true);
check('стоп-слово само написано с заглавной', isSpam('онлайн-казино рядом', ['Казино']), true);
check('пустой список стоп-слов', isSpam('Бесплатно и без регистрации', []), false);
check('пустой текст', isSpam('', stop), false);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
