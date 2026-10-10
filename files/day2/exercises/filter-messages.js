// Filter Messages · День 2 · 15 минут · Упражнение
// The Little JavaScripter — Moscow Coding School
// (задание написано заново в 2026 году: оригинальный файл не сохранился)
//
// Сообщения в мессенджере хранятся в массиве объектов { from, text, read }.
// Напишите функцию unreadFrom(messages, sender), которая возвращает массив
// непрочитанных сообщений (read: false) от отправителя sender в том же порядке.
//
//   const inbox = [
//     { from: 'Маша', text: 'Привет!', read: true },
//     { from: 'Петя', text: 'Во сколько занятие?', read: false },
//     { from: 'Маша', text: 'Ты где?', read: false },
//   ];
//   unreadFrom(inbox, 'Маша') → [{ from: 'Маша', text: 'Ты где?', read: false }]
//
// Как проверить себя: запустите `node filter-messages.js` в терминале
// или скопируйте весь файл в консоль браузера.

function unreadFrom(messages, sender) {
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

const inbox = [
  { from: 'Маша', text: 'Привет!', read: true },
  { from: 'Петя', text: 'Во сколько занятие?', read: false },
  { from: 'Маша', text: 'Ты где?', read: false },
  { from: 'Маша', text: 'Ответь!', read: false },
  { from: 'Петя', text: 'Нашёл, спасибо', read: true },
];
check('непрочитанные от Маши', unreadFrom(inbox, 'Маша'), [inbox[2], inbox[3]]);
check('непрочитанные от Пети', unreadFrom(inbox, 'Петя'), [inbox[1]]);
check('от Оли ничего нет', unreadFrom(inbox, 'Оля'), []);
check('всё от Маши прочитано', unreadFrom([inbox[0]], 'Маша'), []);
check('пустой ящик', unreadFrom([], 'Маша'), []);

console.log(passed === total
  ? 'Готово! Все проверки пройдены.'
  : 'Пройдено ' + passed + ' из ' + total);
