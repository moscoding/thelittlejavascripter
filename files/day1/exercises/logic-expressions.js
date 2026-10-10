// Logic Expressions · День 1 · 5 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Машина времени готовится к прыжку, и бортовой компьютер проверяет условия.
// Не запуская код, предскажите значение каждого выражения из списка и
// запишите его в predictions вместо null: true или false (а в пункте 8 —
// строку). Проверка вычислит настоящие значения и объяснит каждую ошибку.
//
// Как проверить себя: запустите `node logic-expressions.js` в терминале
// или скопируйте весь файл в консоль браузера.

const speed = 88;     // миль в час
const year = 1985;
const plutonium = 0;  // граммов плутония в баке

//  1) speed >= 88                5) speed >= 88 && plutonium > 0
//  2) speed > 88                 6) speed >= 88 || plutonium > 0
//  3) year === '1985'            7) !plutonium
//  4) year !== 1955              8) year > 2000 ? 'будущее' : 'прошлое'
//  9) 0.1 + 0.2 === 0.3         10) '10' > '9'
const predictions = {
  q1: null, q2: null, q3: null, q4: null, q5: null,
  q6: null, q7: null, q8: null, q9: null, q10: null,
};

// ─── Проверка (не меняйте код ниже) ───
let passed = 0;
let total = 0;

function check(name, actual, expected, why) {
  total++;
  const got = JSON.stringify(actual);
  const want = JSON.stringify(expected);
  if (got === want) {
    passed++;
    console.log('✓ ' + name);
  } else {
    console.log('✗ ' + name + ' — вы ответили ' + got + ', на самом деле ' + want + '. ' + why);
  }
}

check(' 1) speed >= 88', predictions.q1, speed >= 88, '>= значит «больше или равно», а 88 равно 88');
check(' 2) speed > 88', predictions.q2, speed > 88, '> значит «строго больше», а 88 не больше 88');
check(" 3) year === '1985'", predictions.q3, year === '1985', '=== не приводит типы: число 1985 не равно строке');
check(' 4) year !== 1955', predictions.q4, year !== 1955, '!== значит «строго не равно», а 1985 и правда не 1955');
check(' 5) ... && ...', predictions.q5, speed >= 88 && plutonium > 0, '&& истинно, только если истинны обе части, а plutonium > 0 ложно');
check(' 6) ... || ...', predictions.q6, speed >= 88 || plutonium > 0, '|| достаточно одной истинной части: speed >= 88 верно');
check(' 7) !plutonium', predictions.q7, !plutonium, '0 — «ложное» значение, а ! превращает его в true');
check(' 8) ... ? ... : ...', predictions.q8, year > 2000 ? 'будущее' : 'прошлое', 'условие year > 2000 ложно, поэтому берётся значение после двоеточия');
check(' 9) 0.1 + 0.2 === 0.3', predictions.q9, 0.1 + 0.2 === 0.3, 'дроби хранятся в двоичном виде приблизительно: 0.1 + 0.2 = ' + (0.1 + 0.2));
check("10) '10' > '9'", predictions.q10, '10' > '9', "строки сравниваются посимвольно, а '1' меньше '9'");

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
