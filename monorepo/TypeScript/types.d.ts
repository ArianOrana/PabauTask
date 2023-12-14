interface Intern {
  name: string;
  age: number;
  skills: string[];
}

interface Junior {
  name: string;
  age: number;
  skills: string[];
  date_of_promotion: string;
  domain: Domain;
}

type Domain = "Web" | "Connect" | "Backend";

export interface Company {
  Interns: Intern[];
  Juniors: Junior[];
  Country: string;
}
