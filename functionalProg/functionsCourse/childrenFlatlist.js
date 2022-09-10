/*  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей
и возвращает плоский список их детей. Дети каждого пользователя хранятся в виде массива в ключе children.   */
const users = [
    {
        name: 'Tirion',
        children: [
            { name: 'Mira', birthday: '1983-03-23' },
        ],
    },
    { name: 'Bronn', children: [] },
    {
        name: 'Sam',
        children: [
            { name: 'Aria', birthday: '2012-11-03' },
            { name: 'Keit', birthday: '1933-05-14' },
        ],
    },
    {
        name: 'Rob',
        children: [
            { name: 'Tisha', birthday: '2012-11-03' },
        ],
    },
];

export default function getChildren(users){
    return users
        .map(user => user.children)
        .flat();
}

console.log(getChildren(users));
// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];