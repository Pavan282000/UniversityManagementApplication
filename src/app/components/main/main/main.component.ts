import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  nodes: any = [];
  students: any=[];
  bml: any=[];
  programmes: any = [];
  relations: any=[];
  courses: any=[];
  faculties: any=[];
  postStudentOutput: any;
  postNodeOutput: any;
  postSchoolOutput: any;
  connection: any=[];
  postRelationOutput: any;
  postConnOutput: any;
  postFacultyOutput: any;
  ProgName: any;
  postDeleteOutput: any;
  postDelProgOutput: any;
  ProgName1: any;
  postaddProgOutput: any;
  courName: any;
  postCourseOutput: any;
  deleteCouOutput: any;
  showDept:boolean = false
  departments: any=[];
  FacultyCourse: any;
  delnode: any;
  delname: any;
  DeleteOutput: any;
  studentNAME: any;

  constructor(private service: MainService) {
    this.service.getRelations("BML").subscribe((data: any) => {
      this.bml = data
  })

  }


  ngOnInit(): void {
    this.service.getAllNodes().subscribe((data: any) => {
      this.nodes = data
    })

    this.service.getAllReltions().subscribe((data: any) => {

      this.relations = data

    })

    this.getAllStudents()
    this.getAllFaculty()
    this.getCourses()
  }


  getAllStudents(): any {
    this.service.getAllStudents().subscribe((data: any) => {
      this.students = data
    })
  }
  getAllFaculty():any{
    this.service.getAllFaculty().subscribe((data: any) => {
        console.log(data)
        this.faculties= data
      })
  }

  getCourses():any{
    this.service.getCourses().subscribe((data: any) => {
      console.log(data)
      this.courses = data
    })
  }

  showProg:boolean = false
  school(node:any):any{
    console.log(node)
    this.showProg = true
    this.service.getRelation("SCHOOL",node).subscribe((data: any) => {
      this.programmes = data
    })
    this.getStudentBySchool(node)
    this.getFacultyBySchool(node)
  }

  getStudentBySchool(school:any):any{
    this.service.getStudentBySchool(school).subscribe((data: any) => {
      console.log(data)
      this.students = data
    })
  }

  getFacultyBySchool(school:any):any{
    this.service.getFacultyBySchool(school).subscribe((data: any) => {
      console.log(data)
      this.faculties = data
    })
  }




  // program(node:any):any{
  //   console.log(node)
  //   this.showProg = true
  //   this.getStdByProgramme(node)
  //   this.getFacultyByProgramme(node)
  // }


  program(node:any):any{
    console.log(node)
    this.showDept = true
    this.service.getNodesByReltion("PROGRAMME",node,"hasDepartment").subscribe((data: any) => {
      this.departments = data
      console.log(this.departments)
    })
    this.getStdByProgram(node)
    this.getFacultyByProgram(node)
  }


  getStdByProgram(node:any){
    this.service.getStudentByProgramme(String(node)).subscribe((data: any) => {
      console.log(data)
      this.students = data

    })
  }
    getFacultyByProgram(node:any){
      this.service.getFacultyByProgramme(node).subscribe((data: any) => {
        console.log(data)
        this.faculties = data
      })
    }

///////////////////////////////////////
    department(node:any):any{

      console.log(node)

      this.getStudentByDept(node)
      this.getFacultyByDept(node)
    }



getStudentByDept(node:any):any{
  this.service.getStudentByDepartment(node).subscribe((data: any) => {
    console.log(data)
    this.students = data
})}

getFacultyByDept(node :any):any{
  this.service.getFacultyByDepartment(node).subscribe((data: any) => {
    console.log(data)
    this.faculties = data
})
}




  // ############################################################
  Studentname:any = null
  stdName(event:any):any{
    this.Studentname=event.target.value
    console.log(String(this.Studentname))
  }
  StudentId:any = null
  stdId(event:any):any{
    this.StudentId=event.target.value
    console.log(String(this.StudentId))
  }
  StudentContact:any = null
  stdContact(event:any):any{
    this.StudentContact=event.target.value
    console.log(String(this.StudentContact))
  }
  StudentEmail:any = null
  stdEmail(event:any):any{
    this.StudentEmail=event.target.value
    console.log(String(this.StudentEmail))
  }


  postStudent():any{
    let data = {
      "RegistrationId": this?.StudentId,
      "Contact":this?.StudentContact ,
      "Email": this?.StudentEmail
  }
    this.service.postStudent(data,this.Studentname).subscribe((data: any) => {
      console.log(data)
      this.postStudentOutput = data
    })
  }

  // #############################################

  label:any
  nodeLabel(event:any):any{
    this.label=event.target.value
    console.log(String(this.label))
  }
nodeNAME:any
  nodeName(event:any):any{
    this.nodeNAME=event.target.value
    console.log(String(this.nodeNAME))
  }
postNode():any{
  let data = {
    "name":this.nodeNAME
  }
  this.service.postNode(this.label,data).subscribe((data: any) => {
    console.log(data)
    this.postNodeOutput = data
  })
}

// #############################################

schoolname:any
schoolName(event:any):any{
  this.schoolname=event.target.value
  console.log(String(this.schoolname))
}

postSchool():any{
  let data = {
    "name":this.schoolname
  }
  this.service.postNode("SCHOOL",data).subscribe((data: any) => {
    console.log(data)
    this.postSchoolOutput = data
  })
}

// #############################################


connect(event:any):any{
  this.connection=event.target.value
  console.log(String(this.connection))
}
connectionName:any
connectName(event:any):any{
  this.connectionName=event.target.value
  console.log(String(this.connectionName))
}

postConnection():any{
  let data = {
    "nodeName1":this.connectionName,
    "nodeName2":this.schoolname,
  }
  this.service.postRelation(data,this.connection,"SCHOOL","hasSchool").subscribe((data: any) => {
    console.log(data)
    this.postConnOutput = data
  })
}

// #############################################


fNode:any
firstNode(event:any):any{
  this.fNode=event.target.value
  console.log(String(this.fNode))
}
sNode:any
SecondNode(event:any):any{
  this.sNode=event.target.value
  console.log(String(this.sNode))
}
rel:any
relation(event:any):any{
  this.rel=event.target.value
  console.log(String(this.rel))
}
fName:any
firstName(event:any):any{
  this.fName=event.target.value
  console.log(String(this.fName))
}
sName:any
secondName(event:any):any{
  this.sName=event.target.value
  console.log(String(this.sName))
}
postRelation():any{
  let data = {
    "nodeName1":this.fName,
    "nodeName2":this.sName,
  }
  this.service.postRelation(data,this.fNode,this.sNode,this.rel).subscribe((data: any) => {
    console.log(data)
    this.postRelationOutput = data
  })
}

// #############################################



Facultyname:any = null
  facName(event:any):any{
    this.Facultyname=event.target.value
    console.log(String(this.Facultyname))
  }

  FacultyContact:any = null
  facContact(event:any):any{
    this.FacultyContact=event.target.value
    console.log(String(this.FacultyContact))
  }
  FacultyEmail:any = null
  facEmail(event:any):any{
    this.FacultyEmail=event.target.value
    console.log(String(this.FacultyEmail))
  }
  facCourse(event:any):any{
    this.FacultyCourse=event.target.value
    console.log(String(this.FacultyCourse))
  }
  postFaculty():any{
    let data = {

      "Contact":this?.FacultyContact ,
      "Email": this?.FacultyEmail
  }
    this.service.postFaculty(data,this.Facultyname).subscribe((data: any) => {
      console.log(data)
      this.postFacultyOutput = data
    })

  }
  // #############################################


  progName(event:any){
    this.ProgName=event.target.value
    console.log(String(this.ProgName))
  }
  progName1(event:any){
    this.ProgName1=event.target.value
    console.log(String(this.ProgName1))
  }
  AddProgamme():any{
    let data = {
      "name":this.ProgName1
    }
    this.service.postNode("PROGRAMME",data).subscribe((data: any) => {
      console.log(data)
      this.postDelProgOutput = data
    })
  }
  DeleteProgramme():any{
    this.service.deleteNode("PROGRAMME",this.ProgName).subscribe((data: any) => {
      console.log(data)
      this.postaddProgOutput = data
    })
  }


  // #############################################
// DELETE STUDENT

  delNode(event:any):any{
    this.delnode=event.target.value
    console.log(String(this.delnode))
  }
  delName(event:any):any{
    this.delname=event.target.value
    console.log(String(this.delname))
  }

  Delete():any{
    this.service.deleteNode(this.delnode,this.delname).subscribe((data: any) => {
      console.log(data)
      this.DeleteOutput = data
    })
  }

  // #############################################
// COURSE

courseName(event:any):any{
  this.courName=event.target.value
    console.log(String(this.courName))
}
courCredits:any
courseCredits(event:any){
  this.courCredits=event.target.value
    console.log(String(this.courCredits))
}

postCourse(){
  this.service.postCourse(this.courName,this.courCredits).subscribe((data: any) => {
    console.log(data)
    this.postCourseOutput = data
  })
}

delteCourse(){
  this.service.deleteNode("COURSE",this.courName).subscribe((data: any) => {
    console.log(data)
    this.deleteCouOutput = data
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

}





