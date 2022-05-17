const increment = (value: number) => {
  return value + 1;
};
const counter: number = increment(10);
/*  */

let lenguages: string[] = ["java", "typescript", "phyton"];
lenguages.push("go");

/*  */
interface ILenguage {
  name: string;
  isReal: boolean;
  age?: number;
}
const javascript: ILenguage = {
    name: "javascript",
    isReal: true
}
const java: ILenguage = {
    name: "java",
    isReal: true,
    age: 1800
}
/*  */
interface Ifetch {
    name: string,
    email:string,
    age: number,
    isMarried: boolean
}

const fetchData = (apiUrl: string): Promise<Ifetch> => {
  return fetch(apiUrl).then((response) => response.json());
}; 

const data: Ifetch = fetchData("myAwsomeApi.com/data/");
/* console.log(data.name);
console.log(data.email);
console.log(data.age);
console.log(data.isMarried); */

/*  */
enum Cheese {
    cheddar= "cheddar",
    parmesano= "parmesano",
    blueMould= "blueMould"
}

const serveCheese = (cheeseType: Cheese, servings: number): void =>{
   console.log(`You want ${servings} serving of ${cheeseType}`)
}
/*  */