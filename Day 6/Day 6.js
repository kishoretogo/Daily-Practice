1)a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("ram","kgf","pk");
var movie2=new movie('rrr','studio','r');
console.log(movie1,movie2);


// 1)B)The constructor for the class Movie will set the class property rating to "PG" as default when no rating provided. 

code-
class movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie("kgf","studio");
var movie2=new movie('Sms','studioA','r');
console.log(movie1,movie2);



// 1)c) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”.
                     
                     
code-
class movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
var movie1=new movie('casino','econ Productions','PG13');

console.log(movie1)
 
 


// 1)d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getrating() {
    return "the rating is  " + this.rating;
  }
}


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,

const CasinoRoyale = new movie( "casino", "Productions", "PG13");
// 2)converting uml class diagram t= class.


class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
    }
    circle(){
        console.log("this is circle")
    }
    circle(radius){
        console.log("method overriding")
    }
    circle(radius,color){
        console.log(this.radius,this.color+'final method overriding which accepts by javascripot')
    }
    getradius(){
        console.log(" radius of the circle is "+this.radius)
    }
    setradius(newradius){
       this.radius=newradius;

    }
    getcolor(){
        console.log(' color of the circle is '+this.color)
    }

    setcolor(newcolor){
        this.color=newcolor;
    }
    getarea(){
        console.log('area of circle is '+(Math.PI*Math.pow(this.radius,2)))
    }
    getcircumference(){
        console.log(' circumference of a circle is '+(2*Math.PI*this.radius))
    }

} 
let circle1=new circle(1,"green");

circle1.getradius();
circle1.setradius(1)
circle1.getradius();
circle1.getcolor();
circle1.setcolor("Red");
circle1.getcolor();
circle1.getarea();
circle1.getcircumference();


// 3)Write a “person” class to hold all the details.


class person {
  constructor(name,father_name,aadhar_no,mother_name,gender,address,mobile_No,Email) {
    this.name = name ;
    this.father_name = father_name ;
    this.mother_name = mother_name;
    this.aadhar_no = aadhar_no;
    this.gender = gender; ;
    this.address = address ;
    this.mobile_No = mobile_No; ;
    this.Email = Email;
 }
  person_name() {
    return `my name is  ${this.name}`;
  }

  person_father_name() {
    return `my father name is ${this.father_name}`;
  }
  person_mother_name() {
    return `my mother name is ${this.mother_name}`;
  }
  person_aadhar_no() {
    return `aadhar_no  is ${this.aadhar_no}`;
  }
  person_gender() {
    return `i am ${this.gender}`;
  }
  person_address() {
    return `my addressis ${this.adress}`;
  }
  person_mobile_no() {
    return `my mobile_no is ${this.mobile_No}`;
  }
  person_Email() {
    return `my email is ${this.Email}`;
  }
}
//object
const sai_obj = new person("ram","sri","stella","2413-23232-9309","fyder","cbe","323243","ram@gmail.com");

console.log(sai_obj.person_name());
console.log(sai_obj.person_father_name());
console.log(sai_obj.person_mother_name());
console.log(sai_obj.person_aadhar_no());

console.log(sai_obj.person_gender());
console.log(sai_obj.person_address());
console.log(sai_obj.person_mobile_no());
console.log(sai_obj.person_Email());




// 4)write a class to calculate uber price.

code-
       class UberPriceCalculator{
    constructor(CRD,SBM,basefare,CPM,TR,ridedistance,bookingfee){
        
        this.CRD=CRD;
        this.SBM=SBM;
        this.basefare=basefare;
        this.CPM=CPM;
        this.TR=TR;
        this.ridedistance=ridedistance
        this.bookingfee=bookingfee;

    }
    getprice(){
        console.log(" UBER PRICE IS "+(this.basefare + ((this.CPM * this.TR) + (this.CRD* this.ridedistance) *this.SBM) + this.bookingfee ))
    }
    
     setprice(newCRD,newSBM,newbasefare,newCPM,newTR,newridedistance,newbookingfee){
            
            this.CRD=newCRD;
            this.SBM=newSBM;
            this.basefare=newbasefare;
            this.CPM=newCPM;
            this.TR=newTR;
            this.ridedistance=newridedistance
            this.bookingfee=newbookingfee;
    
        }    
}
var cost1=new UberPriceCalculator();
cost1.setprice(100,5,20,15,10,3,20)
cost1.getprice()