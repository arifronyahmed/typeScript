//after the parameter declaration the defined type is infact the return type of the function
function square(num: number): number {
  return num * num;
}

square(2);

function greet(person: string = "anonym", message: string): string {
  return `hello ${person} , nice to meet you, ${message}`;
}

greet("", "welcome");

const colors: string[] = ["red", "green", "blue", "yellow", "orange"];

colors.map((color) => {
  return color.toLocaleUpperCase();
});

//void is a returen type for functions that don't return anything.
//it means just that this function is void of any data

//TypeScript can infer this type fairly well,

//but sometimes it may want you to anotate a function with a void return explicitly



function twoFer(person: string = "you"): string {
    return `One for ${person}, one for me.`;
  }
  
  console.log(twoFer());
  console.log(twoFer("Elvis"));
  
  // **********************************************
  // ******************* PART 2 *******************
  // **********************************************
  // Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
  // isLeapYear(2012) => true
  // isLeapYear(2013) => false
  
  // To determine whether a year is a leapyear, use this "formula":
  // A YEAR IS A LEAPYEAR IF
  // - year is a multiple of 4 AND not a multiple of 100
  // OR...
  // - year is a multiple of 400
  // hint - use modulo
  
//   const isLeapYear = (year: number): boolean => {
//     if (year % 4 === 0 && year % 100 !== 0) {
//       return true;
//     } else if(year % 400 === 0){
//       return true
//     }
//     return false;
//   };
  
  const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  
  console.log(isLeapYear(2012));
  console.log(isLeapYear(2013));
  