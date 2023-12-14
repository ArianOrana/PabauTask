import { Company } from "./types";

const myCompany: Company = {
  Interns: [
    { name: "Alice", age: 22, skills: ["React", "HTML", "JS", "TypeScript"] },
  ],
  Juniors: [
    {
      name: "Bob",
      age: 25,
      skills: ["React", "HTML", "JS"],
      date_of_promotion: "2023-01-15",
      domain: "Web",
    },
  ],
  Country: "YourCountry",
};

console.log(myCompany);
