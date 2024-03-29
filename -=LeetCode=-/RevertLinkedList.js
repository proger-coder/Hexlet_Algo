/*Задача: Обращение связного списка
Дан односвязный список, представленный своей головной нодой (head). Напишите функцию, которая будет обращать данный связный список.

Описание структуры узла (ноды):
Узел списка представлен объектом с полями:

value: значение узла.
next: ссылка на следующий узел в списке или null, если это последний узел.
Пример:
Входной список: 1 → 2 → 3 → 4 → 5 → null
Выходной список: 5 → 4 → 3 → 2 → 1 → null

Ограничения:
Список может быть пустым.
Не использовать вспомогательные структуры данных, как массивы или строки. Только константное дополнительное пространство.
Постарайтесь выполнить задачу за один проход по списку.*/

function ListNode(value, next = null) {
    this.value = value;
    this.next = next;
}

// Создаем узлы - c конца, т.к. надо ссылаться на следующий при создании.
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Головной узел списка
const head = node1;

// Теперь связный список выглядит так: 1 → 2 → 3 → 4 → 5 → null
console.log(head)