// Onion Skins · День 2 · 1 час · Домашка
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Задание на звёздочку. Напишите функцию unfold(path), которая превращает
// строку с точками в «луковицу» из вложенных объектов: каждая часть, кроме
// последней, становится ключом, а последняя — значением в самой серединке.
//
//   unfold('a.b.c.d')   → { a: { b: { c: 'd' } } }
//   unfold('a.b')       → { a: 'b' }
//   unfold('луковица')  → 'луковица'  (точек нет — возвращаем строку как есть)
//
// Подсказка: луковицу удобно собирать изнутри наружу, с конца массива частей.
//
// Как проверить себя: запустите `node onion-skins.js` в терминале
// или скопируйте весь файл в консоль браузера.

function unfold(path) {
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

check("unfold('a.b.c.d')", unfold('a.b.c.d'), { a: { b: { c: 'd' } } });
check("unfold('a.b')", unfold('a.b'), { a: 'b' });
check("unfold('x.y.z')", unfold('x.y.z'), { x: { y: 'z' } });
check("unfold('user.profile.name.Вася')", unfold('user.profile.name.Вася'), { user: { profile: { name: 'Вася' } } });
check('без точек', unfold('луковица'), 'луковица');

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
