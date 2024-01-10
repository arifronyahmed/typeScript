// const person = {
//   name: "arif",
//   age: 29,
//   nationality: "Bangladesh",
// };

function printDetails(person: {
  name: string;
  age: number;
  nationality: string;
}): void {
  console.log(`${person.name} is ${person.age}years old `);
}

printDetails({ name: "arif", age: 29, nationality: "Bangladesh" });

function randomCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

//type aliases

type Point = {
  x: number;
  y: number;
  z?: number; //optional
};

let coordinates: Point = { x: 34, y: 34 };

function newCoordinates(points: Point): Point {
  return { x: points.x, y: points.y };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
    productionHouse: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(song.title);
}

//readOnly modifier

type User = {
  readonly id: number; // you can only read but not write
  firstName: string;
  lastName: string;
};

const user: User = {
  id: 316565165,
  firstName: "John",
  lastName: "Doe",
};

//intersection types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

//intersection with &
type colorfulCircle = Circle & Colorful;

const happyFace: colorfulCircle = {
  radius: 5,
  color: "yellow",
};

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

function getProfit({ boxOffice: { grossWorldwide, budget } }: Movie): number {
  return grossWorldwide - budget;
}

console.log(getProfit(dune));
console.log(getProfit(cats));
