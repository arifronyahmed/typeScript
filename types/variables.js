//run the file with command in command line tsc filename.ts
//type annotation
//assigning a basic type  to a variable is easy
// jsut add :Type after the variable name!
//Type:String
var movieTitle = "titanic";
movieTitle = "shawshank redemption";
movieTitle.toUpperCase();
//Type: number
var numBooks = 10;
numBooks += 1;
//Type:boolean
var isMovie = false;
//Type inference refers to the Typescritp compiler's ability to infer from certain values in your code
//Typescript can remember a value's type even if you didn't provide a type annotation, and it will enforce thtat type moving forward
//Type: any
//any is an escape hatch , it turn off type checking for the variable, so that you can do your thing
var something = "something";
something = 2;
something = true;
something();
//type any should not be used alot, because it diminishes the ts type checking ability
