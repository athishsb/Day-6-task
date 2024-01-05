class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4"),
];
const pgMoviesArray = Movie.getPG(moviesArray);

console.log(casinoRoyale);
// Output:
// Movie {
//     title: 'Casino Royale',
//     studio: 'Eon Productions',
//     rating: 'PG-13'
//   }

console.log(pgMoviesArray);
// Output:
// [
//     Movie { title: 'Movie1', studio: 'Studio1', rating: 'PG' },
//     Movie { title: 'Movie4', studio: 'Studio4', rating: 'PG' }
//   ]