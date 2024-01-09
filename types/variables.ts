//run the file with command in command line tsc filename.ts

//type annotation
//assigning a basic type  to a variable is easy
// jsut add :Type after the variable name!

//Type:String
let movieTitle: string = "titanic";

movieTitle = "shawshank redemption";

movieTitle.toUpperCase();

//Type: number

let numBooks: number = 10;

numBooks += 1;

//Type:boolean

let isMovie: boolean = false;

//Type inference refers to the Typescritp compiler's ability to infer from certain values in your code

//Typescript can remember a value's type even if you didn't provide a type annotation, and it will enforce thtat type moving forward

//Type: any
//any is an escape hatch , it turn off type checking for the variable, so that you can do your thing

let something: any = "something";

something = 2;
something = true;
something();

//type any should not be used alot, because it diminishes the ts type checking ability

const movies = ["Arrival", "Star wars", "John wick"];

let foundMovie: string;

for (let movie of movies) {
  if (movie === "Star wars") {
    foundMovie = "star wars";
  }
}
