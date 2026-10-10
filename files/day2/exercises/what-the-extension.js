// What’s the Extension? · День 2 · 1 час · Домашка
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Напишите функцию getExtension(filename), которая возвращает расширение
// файла — всё, что идёт после последней точки в имени.
// Если точки нет (или после неё ничего нет), верните пустую строку.
//
//   getExtension('Underscore.js')   → 'js'
//   getExtension('archive.tar.gz')  → 'gz'
//   getExtension('README')          → ''
//
// Как проверить себя: запустите `node what-the-extension.js` в терминале
// или скопируйте весь файл в консоль браузера.

function getExtension(filename) {
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

check("getExtension('Underscore.js')", getExtension('Underscore.js'), 'js');
check("getExtension('archive.tar.gz')", getExtension('archive.tar.gz'), 'gz');
check("getExtension('index.html')", getExtension('index.html'), 'html');
check('регистр сохраняется', getExtension('photo.JPG'), 'JPG');
check('без расширения', getExtension('README'), '');
check('точка в самом конце', getExtension('notes.'), '');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
