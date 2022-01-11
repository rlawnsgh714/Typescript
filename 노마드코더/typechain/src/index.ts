class Human {
  public name: string;
  public age: number;
  public mail: string;
  constructor(name: string, age: number, mail?: string) {
    this.name = name;
    this.age = age;
    this.mail = mail;
  }
}

const lynn = new Human("junho", 18, "mail");

const sayhi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}. your mail is ${person.mail}`;
};

console.log(sayhi(lynn));

export {};
