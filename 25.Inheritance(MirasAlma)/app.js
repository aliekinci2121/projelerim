//Inheritance(miras alam) kavrami

// class Person {
//   firtName = "Ali";
//   write() {
//     console.log('Person Write',this.firtName);
//   }
// }
// class Student extends Person {
//   //student sinifi Person sinifini miras aliyor
//   write() {
//     console.log("Person sinifindan gelsim", this.firtName);
//     console.log(super.write());
//   }
// }
// const student = new Student();
// student.write();

// const person=new Person()
// person.write()


//! this super ve super()

// class Person{
//    constructor(firstName,lastName,salary,){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.salary=salary
//    }
//    writeInfo(){
//     console.log(this.firstName,this.lastName,this.salary)
//    }
// }


// class Student extends Person{
//      constructor(firstName,lastName,salary){
//       super(firstName,lastName,salary)
//      }
//      writeInfo(){
//       super.writeInfo()
//      }
//   }
//   class Engineer extends Person{
//     constructor(firstName,lastName,salary){
//       super(firstName,lastName,salary)
//     }
//     writeInfo(){
//       super.writeInfo()
//     }
//   }
  

// const student1=new Student('Ali','Ekinci',10000)
// const eingineer1=new Engineer('Aysun','Meral',1400)


//  student1.writeInfo()
//  eingineer1.writeInfo()

