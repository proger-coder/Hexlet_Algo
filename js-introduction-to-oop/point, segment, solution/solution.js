/*  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход отрезок и возвращает новый
отрезок с точками, добавленными в обратном порядке (begin меняется местами с end).

Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка.
То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).
Для создания копий используйте соответствующие конструкторы.    */

import Point from './Point.js';
import Segment from './Segment.js';

export default function reverse(segment){
    const a = segment.getBeginPoint().getX();
    const b = segment.getBeginPoint().getY();
    const c = segment.getEndPoint().getX();
    const d = segment.getEndPoint().getY();
    return new Segment(new Point(c,d),new Point(a,b));
}

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
console.log(
    segment.beginPoint.x,
    segment.beginPoint.y,
    segment.endPoint.x,
    segment.endPoint.y,
);// => 1 10 11 -3

console.log(
    reversedSegment.beginPoint.x,
    reversedSegment.beginPoint.y,
    reversedSegment.endPoint.x,
    reversedSegment.endPoint.y,
); // => 11 -3 1 10

