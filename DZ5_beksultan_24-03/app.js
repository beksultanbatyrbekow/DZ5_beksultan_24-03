const books = ['убийство в поезде','учитель','улитка на склоне','боб уличный кот','десять негритят','баатыр','кладбищедомашних животных']
let book = []
function filterBooks(arr) {
    for (i of arr){
        for (j of i){
            if (j=="у"){
                book.push(i)
            }
        }
    }
}
filterBooks(books)
console.log(book)