import { getDayFrom, getBooksByRiseSortedByTasksCount, getBooksWithUniqueTaskCount } from './helpers.js';

function daysCountForPrepareToExam(books) {
    if (!Array.isArray(books)) {
        return 'Не верный формат книг!';
    }

    let neededDaysForPrepareToExam = 0;

    books = getBooksByRiseSortedByTasksCount(books);
    books = getBooksWithUniqueTaskCount(books);

    books.forEach((taskCount, i) => {
        if (taskCount >= getDayFrom(i)) {
            neededDaysForPrepareToExam++;
        }
    });

    return neededDaysForPrepareToExam
}



let booksWithTasks = [1, 1, 1, 2, 2];
let daysCount = daysCountForPrepareToExam(booksWithTasks);

console.log(daysCount);