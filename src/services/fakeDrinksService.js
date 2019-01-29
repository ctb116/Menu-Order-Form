// import * as genresAPI from "./fakeGenreService";

const drinks = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Eesti Piiritus",
    brewer: "Estonian Spirits",
    description:
      "This spirit comes from the small Baltic state Estonia. As in most places in Russia, the locals know how to handle their booze. With their Eesti Piiritus the Estonians made the Guiness Book of Records for strongest alcoholic beverage in 1938 with an impressive 98%. Today they still produce booze with a decent 96.6% alcohol.",
    abv: "96.6%",
    price: 20,
    numberInStock: 6
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Cocoroco",
    brewer: "Caiman",
    description:
      "This Bolivian booze is just a little less strong than the number one, but still hellish. It’s distilled from sugar cane and usually comes in a tin can, rather than a bottle, which makes the illusion that you might be drinking paint thinner even more real. Cocoroco is prohibited in many other countries because with an alcohol percentage of 96 it´s simply too strong. In Bolivia´s neighbouring country Chile for example no drink can be over 55% alcohol by law.",
    abv: "96%",
    price: 40,
    numberInStock: 6
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Everclear",
    brewer: "Luxco",
    description:
      "A spirit made from America's golden fields of grain. Popular in cocktails.",
    abv: "95%",
    price: 30,
    numberInStock: 62
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Spirytus Rektyfikowany",
    brewer: "Polomos",
    description:
      "From Poland, Spirytus Rektyfikowany translates as rectified spirit, a very high grade form of ethanol produced by multiple distillations of base grain alcohol used in vodka production. Farmlands in the north western regions of Poland cultivate high quality rye which contains abnormal levels of starch.",
    abv: "96%",
    price: 25,
    numberInStock: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Bruichladdich",
    brewer: "Bruichladdich Distillery",
    description:
      "Good luck bringing this one to a whiskey tastery. This Scottish single malt contains no less than 92% alcohol. Well, it has been distilled no less than 4 times. The brand got a lot of fame when the British national television station BBC succesfully fueled a car with this stuff.",
    abv: "92%",
    price: 40,
    numberInStock: 18
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Poitín (Poteen)",
    brewer: "Glendalough Distillery",
    description:
      "The typical strong drink from Ireland, made from barley, potatoes, whey or grain. The first record of poitín was from the 6th century. But for 300 years it had the status of illegal moonshine , until poitín was legalized in 1977.",
    abv: "90%",
    price: 20,
    numberInStock: 6
  }
];

export function getDrinks() {
  return drinks;
}

// export function getMovie(id) {
//   return movies.find(m => m._id === id);
// }

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
