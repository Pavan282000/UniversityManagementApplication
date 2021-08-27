import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {

    constructor(private http: HttpClient) { }


    getAllNodes() {
        return this.http.get("http://127.0.0.1:5000/getAllLabels")
    }


    getNodeNames(name:any){
      return this.http.get(`http://127.0.0.1:5000/getNode/${name}`)
    }

    // getAllStudents
    getAllStudents():any{
      return this.http.get("http://127.0.0.1:5000/getAllStudents")
    }

    //getStudentsByProgramme
    getStudentByProgramme(programme:any):any{
      return this.http.get(`http://127.0.0.1:5000/getStudentsbyProgramme/${programme}`)
    }

    //getStudentsByDepartment
    getStudentByDepartment(dept:any):any{
      return this.http.get(`http://127.0.0.1:5000/getstudentsbyDept/${dept}`)
    }

    //getStudentByCourse
    getStudentByCourse(course:any):any{
      return this.http.get(`http://127.0.0.1:5000/getstudentsbyCourse/${course}`)
    }

    //getStudentBySchool
    getStudentBySchool(school:any):any{
      return this.http.get(`http://127.0.0.1:5000/getstudentsbySchool/${school}`)
    }

 //getCoursesOfStudent
    getCoursesOfStudent(StdName:any):any{
      return this.http.get(`http://127.0.0.1:5000/getCourses/${StdName}`)
    }



    getStudentDetails(stdName:any):any{
      return this.http.get(`http://127.0.0.1:5000/getdetails/${stdName}`)
    }


    getRelations(node:any){
      return this.http.get(`http://127.0.0.1:5000/getrelations/${node}`)
    }

    getRelation(node:any,name:any){
      return this.http.get(`http://127.0.0.1:5000/getrelation/${node}/${name}`)
    }

    getNodesByReltion(node:any,name:any,relation:any){
      return this.http.get(`http://127.0.0.1:5000/getNodebyRelation/${node}/${name}/${relation}`)
    }

    getAllReltions():any{
      return this.http.get(`http://127.0.0.1:5000/getAllrelationNames`)
    }


    getCourses():any{
      return this.http.get(`http://127.0.0.1:5000/getAllCourses`)
    }

    getAllFaculty():any{
      return this.http.get(`http://127.0.0.1:5000/getAllFaculty`)
    }

    getFacultyBySchool(school:any):any{
      return this.http.get(`http://127.0.0.1:5000/getfacultybySchool/${school}`)
    }


    getFacultyDetails(name:any){
      return this.http.get(`http://127.0.0.1:5000/getfacultydetails/${name}`)
    }
    getFacultyByProgramme(prog:any){
      return this.http.get(`http://127.0.0.1:5000/getFacultybyProgramme/${prog}`)
    }
    getFacultyByDepartment(dept:any){
      return this.http.get(`http://127.0.0.1:5000/getfacultybyDept/${dept}`)
    }



    postStudent(data:any,name:any):any{
      console.log(data)
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')}
      return this.http.post(`http://127.0.0.1:5000/createStudent/${name}`,data,config)
    }

    postFaculty(data:any,name:any):any{
      console.log(data)
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')}
      return this.http.post(`http://127.0.0.1:5000/createFaculty/${name}`,data,config)
    }

    postNode(label:any,data:any):any{
      console.log(data)
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')}
      return this.http.post(`http://127.0.0.1:5000/createNode/${label}`,data,config)
    }

    postRelation(data:any,node1:any,node2:any,relationship:any){
      console.log(data)
      const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')}
      return this.http.post(`http://127.0.0.1:5000/createRelation/${node1}/${node2}/${relationship}`,data,config)
    }


    deleteNode(nodeLabel:any,nodeName:any){

      return this.http.delete(`http://127.0.0.1:5000/deleteNode/${nodeLabel}/${nodeName}`)
    }

    postCourse(name:any,credits:any){
      return this.http.post(`http://127.0.0.1:5000/Course/${name}/${credits}`,null)
    }

}


