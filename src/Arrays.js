/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
  var array = data.split(',');
  array.sort((x, y) => parseInt(x) - parseInt(y));
  return array.join();
}

/*
В функцию arrayFiltering() приходит массив целых чисел.
Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
  var array = [];
  for (let i = 0; i < data.length; ++i) {
      if (data[i] <= 100) array.push(data[i]);
  }
  return array;
}

/*
В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
  return [
      array1[0],
      array2[0],
      array1[1],
      array2[1],
      array1[2],
      array2[2],
      array1[3],
      array2[3],
      array1[4],
      array2[4],
  ];
}
