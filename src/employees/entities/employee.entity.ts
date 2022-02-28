export interface IEmployee {
  id?: number;
  fullName: string;
  email: string;
}
export class Employee implements IEmployee {
  id: number;
  fullName: string;
  email: string;

  constructor(employee?: IEmployee) {
    if (!employee) return;

    this.id = employee.id;
    this.email = employee.email;
    this.fullName = employee.fullName;
  }
}
