export function getDayFrom(i){
 return i+1;
}

export function getBooksByRiseSortedByTasksCount(books){
  return books.sort(function(a,b){ 
    return a - b
 });
}

export function getBooksWithUniqueTaskCount(books){
  return books.filter(function(TaskCount, index) {
      return books.indexOf(TaskCount) == index;
  });
}
