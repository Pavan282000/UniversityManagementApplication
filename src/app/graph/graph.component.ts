import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/services/main/main.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  expandTutorialNode: boolean= false;
  schools: any;
  display0:boolean= false;
  programmes: any;
  programme: any;
  departments: any;
  display1: boolean= false;
  display3:boolean=false;
  prog: any;
  dept: any;
  scl: any;
  showNode: boolean= false;
  students: any;
  Deptstudents: any;
  Progstudents: any;
  Sclstudents: any;
  studentNAME: any;
  details: boolean = false;
  displayFacStudentNodes: boolean = false;
  displayProgFacNodes: boolean= false;
  displayDeptFacNodes: boolean = false;
  Facstudents: any;
  displaySclFacNodes: boolean = false;
  showFacNode = false;
  SclFaculty: any;
  Deptfaculty: any;
  constructor(private service:MainService) { }

  ngOnInit(): void {
    this.service.getNodeNames("SCHOOL").subscribe((data: any) => {
      this.schools = data
      console.log(this.schools[0].Nodes)
  })}



  getProgramme(event:any):any{
    this.scl = event.target.value;
    this.service.getNodesByReltion("SCHOOL",this.scl,"hasProgramme").subscribe((data: any) => {
      this.programmes = data
      console.log(this.programmes[0].Nodes)
      this.display0 = true

  })
  }

  getDept(event:any):any{
    this.prog = event.target.value;
    this.service.getNodesByReltion("PROGRAMME",this.prog,"hasDepartment").subscribe((data: any) => {
      this.departments = data
      console.log(this.departments[0].Nodes)
      this.display1 = true

  })


  }

  loadChartDisplay(event:any):any{
    this.dept = event.target.value;
    this.display3 = true;

  }


  loadchart():any{
    this.showNode = true;
    this.showFacNode = true;

  }
  displayDeptStudentNodes:boolean = false;
  showDeptStudents():any{
    this.displayDeptStudentNodes = true;
    this.displayProgStudentNodes = false;
    this.displaySclStudentNodes = false;
    this.getStudentByDept()
  }

  displayProgStudentNodes:boolean = false;
  showProgStudents():any{
    this.displayProgStudentNodes = true;
    this.displayDeptStudentNodes = false;
    this.displaySclStudentNodes = false;
    this.getStdByProgram()
  }

  displaySclStudentNodes:boolean = false;
  showSclStudents():any{
    this.displaySclStudentNodes = true;
    this.displayProgStudentNodes = false;
    this.displayDeptStudentNodes = false;
    this.getStudentBySchool()
  }

  showSclFaculty():any{
    this.displaySclFacNodes = true;
    this.displayProgFacNodes = false;
    this.displayDeptFacNodes = false;
    this.getFacultyBySchool()
  }

  showProgFaculty():any{
    this.displayProgFacNodes = true;
    this.displayDeptFacNodes = false;
    this.displaySclFacNodes = false;
    this.getFacByProgram()
  }

  showDeptFaculty():any{
    this.displayDeptFacNodes = true;
    this.displayProgFacNodes = false;
    this.displaySclFacNodes = false;
    this.getFacByDept()
  }


  getStudentByDept():any{
    this.service.getStudentByDepartment(this.dept).subscribe((data: any) => {
      console.log(data)
      this.Deptstudents = data
  })}

  getFacByDept(){
    this.service.getFacultyByDepartment(this.dept).subscribe((data: any) => {
      console.log(data)
      this.Deptfaculty = data
  })
  }

  getStdByProgram(){
    this.service.getStudentByProgramme(String(this.prog)).subscribe((data: any) => {
      console.log(data)
      this.Progstudents = data

    })
  }

  getStudentBySchool():any{
    this.service.getAllStudents().subscribe((data: any) => {
      console.log(data)
      this.Sclstudents = data
    })
  }

  getFacultyBySchool():any{
    this.service.getAllFaculty().subscribe((data: any) => {
      console.log(data)
      this.SclFaculty = data
      console.log(this.SclFaculty[0]?.Faculty.Name)
    })
  }

  getFacByProgram():any{
    this.service.getFacultyByProgramme(String(this.prog)).subscribe((data: any) => {
      console.log(data)
      this.SclFaculty = data
      console.log(this.SclFaculty[0]?.Faculty.Name)
    })
  }


studentID:any
studentEmail:any
studentContact:any
studentDepartment:any
studentProgramme:any
studentCourse:any
batch:any
studentDetails:any=[]
StdDetails(student:any):any{

  this.details = true;
console.log(student)
this.service.getStudentDetails(student).subscribe((data: any) => {
  console.log(data)
  console.log(data[1][0].Course)
  console.log(data[2][0].Programme.Name)
  console.log(data[0][0].Student.Contact)
  this.studentNAME = data[0][0].Student.Name
  this.studentID = data[0][0].Student.RegistrationId
  this.studentContact = data[0][0].Student.Contact
  this.studentEmail = data[0][0].Student.Email
  this.studentProgramme = data[2][0].Programme.Name
  this.studentDepartment = data[3][0].Department.Name
  this.studentCourse = data[1][0].Course
  this.batch = data[0][0].Batch
})
}


getFacultyDetails():any{

}

}
