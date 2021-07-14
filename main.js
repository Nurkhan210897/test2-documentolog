function getDayFrom(i) {
    return i + 1;
}

function getBooksByRiseSortedByTasksCount(books) {
    return books.sort(function(a, b) {
        return a - b
    });
}

function getBooksWithUniqueTaskCount(books) {
    return books.filter(function(TaskCount, index) {
        return books.indexOf(TaskCount) == index;
    });
}

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