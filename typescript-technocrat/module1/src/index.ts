let course: string = "hello typescript";

interface IUser {
  readonly managerName?: string;
  firstName: string;
  lastName: string;
  age: number;
  isEmployed?: boolean;
  company?: "bidi Bildung";
}

const user1: IUser = {
  firstName: "Ash",
  lastName: "Russ",
  age: 100,
};

const user2: IUser = {
  firstName: "John",
  lastName: "Sina",
  age: 99,
  isEmployed: true,
  managerName: "Big Shaw",
  company: "bidi Bildung",
};
