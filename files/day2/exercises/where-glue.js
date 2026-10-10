// Where’s Glue? · День 2 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// В коробке для поделок лежит всякая всячина. Напишите функцию
// findGlue(supplies), которая возвращает индекс строки 'glue' (клей) в массиве
// supplies. Если клея нет, верните -1. Если тюбиков несколько — индекс первого.
//
//   findGlue(['scissors', 'paper', 'glue', 'tape']) → 2
//   findGlue(['paint', 'brush'])                    → -1
//
// Как проверить себя: запустите `node where-glue.js` в терминале
// или скопируйте весь файл в консоль браузера.

function findGlue(supplies) {
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

check("findGlue(['scissors', 'paper', 'glue', 'tape'])", findGlue(['scissors', 'paper', 'glue', 'tape']), 2);
check("findGlue(['paint', 'brush'])", findGlue(['paint', 'brush']), -1);
check('клей лежит первым', findGlue(['glue', 'paper']), 0);
check('два тюбика — индекс первого', findGlue(['paper', 'glue', 'glue']), 1);
check('пустая коробка', findGlue([]), -1);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
