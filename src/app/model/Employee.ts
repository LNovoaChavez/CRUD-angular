export class EmployeeModel {
    empId: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    constactNo: string;
    address: string;

    constructor(){
        this.address = " ";
        this.city = " ";
        this.constactNo = " ";
        this.emailId = " ";
        this.empId = 0;
        this.name = " ";
        this.state = " ";
    }
}