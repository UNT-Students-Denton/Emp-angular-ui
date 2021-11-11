import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss'],
})
export class ViewCourseComponent implements OnInit {
  department_name = 'Fuzzys'
  images:any=[];
  len:Number;
  Fuzzys: any = [
    {
      src: "/assets/training_images/Fuzzys/1.PNG",
      alt: 'Image One'
    },
    {
      src: "/assets/training_images/Fuzzys/2.PNG",
      alt: 'Image Two'
    },
    {
      src: "/assets/training_images/Fuzzys/3.PNG",
      alt: 'Image Three'
    },
    {
      src: "/assets/training_images/Fuzzys/4.PNG",
      alt: 'Image Four'
    },
    {
      src: "/assets/training_images/Fuzzys/5.PNG",
      alt: 'Image Five'
    },
    {
      src: "/assets/training_images/Fuzzys/6.PNG",
      alt: 'Image Six'
    },
    {
      src: "/assets/training_images/Fuzzys/7.PNG",
      alt: 'Image Seven'
    },
    {
      src: "/assets/training_images/Fuzzys/8.PNG",
      alt: 'Image Eight'
    },
    {
      src: "/assets/training_images/Fuzzys/9.PNG",
      alt: 'Image Nine'
    },
    {
      src: "/assets/training_images/Fuzzys/10.PNG",
      alt: 'Image Ten'
    },
    {
      src: "/assets/training_images/Fuzzys/11.PNG",
      alt: 'Image Eleven'
    },
    {
      src: "/assets/training_images/Fuzzys/12.PNG",
      alt: 'Image Twelve'
    },
    {
      src: "/assets/training_images/Fuzzys/13.PNG",
      alt: 'Image Thirteen'
    },
    {
      src: "/assets/training_images/Fuzzys/14.PNG",
      alt: 'Image Fourteen'
    },
    {
      src: "/assets/training_images/Fuzzys/15.PNG",
      alt: 'Image Fifteen'
    },
    {
      src: "/assets/training_images/Fuzzys/16.PNG",
      alt: 'Image Sixteen'
    },
    {
      src: "/assets/training_images/Fuzzys/17.PNG",
      alt: 'Image Seventeen'
    },
    {
      src: "/assets/training_images/Fuzzys/18.PNG",
      alt: 'Image Eighteen'
    },
    {
      src: "/assets/training_images/Fuzzys/19.PNG",
      alt: 'Image Nineteen'
    },
    {
      src: "/assets/training_images/Fuzzys/end.PNG",
      alt: 'Ending Image'
    }
    ]
 Chickfila : any = [{
      src: "assets/training_images/Chickfila/1.PNG",
      alt: 'Image One'
    },
    {
      src: "assets/training_images/Chickfila/2.PNG",
      alt: 'Image Two'
    },
    {
      src: "assets/training_images/Chickfila/3.PNG",
      alt: 'Image Three'
    },
    {
      src: "assets/training_images/Chickfila/4.PNG",
      alt: 'Image Four'
    },
    {
      src: "assets/training_images/Chickfila/5.PNG",
      alt: 'Image Five'
    },
    {
      src: "assets/training_images/Chickfila/6.PNG",
      alt: 'Image Six'
    },
    {
      src: "assets/training_images/Chickfila/7.PNG",
      alt: 'Image Seven'
    },
    {
      src: "assets/training_images/Chickfila/8.PNG",
      alt: 'Image Eight'
    },
    {
      src: "assets/training_images/Chickfila/9.PNG",
      alt: 'Image Nine'
    },
    {
      src: "assets/training_images/Chickfila/10.PNG",
      alt: 'Image Ten'
    },
    {
      src: "assets/training_images/Chickfila/11.PNG",
      alt: 'Image Eleven'
    },
    {
      src: "assets/training_images/Chickfila/12.PNG",
      alt: 'Image Twelve'
    },
    {
      src: "assets/training_images/Chickfila/13.PNG",
      alt: 'Image Thirteen'
    },
    {
      src: "assets/training_images/Chickfila/14.PNG",
      alt: 'Image Fourteen'
    },
    {
      src: "assets/training_images/Chickfila/15.PNG",
      alt: 'Image Fifteen'
    },
    {
      src: "assets/training_images/Chickfila/16.PNG",
      alt: 'Image Sixteen'
    },
    {
      src: "/assets/training_images/chickfila/end.PNG",
      alt: 'Ending Image'
    }
    ]
  Burger_king :any= [{
      src: "assets/training_images/Burger_king/1.PNG",
      alt: 'Image One'
    },
    {
      src: "assets/training_images/Burger_king/2.PNG",
      alt: 'Image Two'
    },
    {
      src: "assets/training_images/Burger_king/3.PNG",
      alt: 'Image Three'
    },
    {
      src: "assets/training_images/Burger_king/4.PNG",
      alt: 'Image Four'
    },
    {
      src: "assets/training_images/Burger_king/5.PNG",
      alt: 'Image Five'
    },
    {
      src: "assets/training_images/Burger_king/6.PNG",
      alt: 'Image Six'
    },
    {
      src: "assets/training_images/Burger_king/7.PNG",
      alt: 'Image Seven'
    },
    {
      src: "assets/training_images/Burger_king/8.PNG",
      alt: 'Image Eight'
    },
    {
      src: "assets/training_images/Burger_king/9.PNG",
      alt: 'Image Nine'
    },
    {
      src: "assets/training_images/Burger_king/10.PNG",
      alt: 'Image Ten'
    },
    {
      src: "assets/training_images/Burger_king/11.PNG",
      alt: 'Image Eleven'
    },
    {
      src: "assets/training_images/Burger_king/12.PNG",
      alt: 'Image Twelve'
    },
    {
      src: "assets/training_images/Burger_king/13.PNG",
      alt: 'Image Thirteen'
    },
    {
      src: "assets/training_images/Burger_king/14.PNG",
      alt: 'Image Fourteen'
    },
    {
      src: "assets/training_images/Burger_king/15.PNG",
      alt: 'Image Fifteen'
    },
    {
      src: "assets/training_images/Burger_king/16.PNG",
      alt: 'Image Sixteen'
    },
    {
      src: "/assets/training_images/BUrger_king/end.PNG",
      alt: 'Ending Image'
    }
    ]
    Cafeteria :any= [{
      src: "assets/training_images/Cafeteria/1.PNG",
      alt: 'Image One'
    },
    {
      src: "assets/training_images/Cafeteria/2.PNG",
      alt: 'Image Two'
    },
    {
      src: "assets/training_images/Cafeteria/3.PNG",
      alt: 'Image Three'
    },
    {
      src: "assets/training_images/Cafeteria/4.PNG",
      alt: 'Image Four'
    },
    {
      src: "assets/training_images/Cafeteria/5.PNG",
      alt: 'Image Five'
    },
    {
      src: "assets/training_images/Cafeteria/6.PNG",
      alt: 'Image Six'
    },
    {
      src: "assets/training_images/Cafeteria/7.PNG",
      alt: 'Image Seven'
    },
    {
      src: "assets/training_images/Cafeteria/8.PNG",
      alt: 'Image Eight'
    },
    {
      src: "assets/training_images/Cafeteria/9.PNG",
      alt: 'Image Nine'
    },
    {
      src: "assets/training_images/Cafeteria/10.PNG",
      alt: 'Image Ten'
    },
    {
      src: "assets/training_images/Cafeteria/11.PNG",
      alt: 'Image Eleven'
    },
    {
      src: "assets/training_images/Cafeteria/12.PNG",
      alt: 'Image Twelve'
    },
    {
      src: "assets/training_images/Cafeteria/13.PNG",
      alt: 'Image Thirteen'
    },
    {
      src: "assets/training_images/Cafeteria/14.PNG",
      alt: 'Image Fourteen'
    },
    {
      src: "assets/training_images/Cafeteria/15.PNG",
      alt: 'Image Fifteen'
    },
    {
      src: "assets/training_images/Cafeteria/16.PNG",
      alt: 'Image Sixteen'
    },
    {
      src: "assets/training_images/Cafeteria/17.PNG",
      alt: 'Image Seventeen'
    },
    {
      src: "assets/training_images/Cafeteria/18.PNG",
      alt: 'Image Eighteen'
    },
    {
      src: "/assets/training_images/Cafeteria/end.PNG",
      alt: 'Ending Image'
    }
    ]
  Assistantship :any= [{
      src: "assets/training_images/Assistantship/1.PNG",
      alt: 'Image One'
    },
    {
      src: "assets/training_images/Assistantship/2.PNG",
      alt: 'Image Two'
    },
    {
      src: "assets/training_images/Assistantship/3.PNG",
      alt: 'Image Three'
    },
    {
      src: "assets/training_images/Assistantship/4.PNG",
      alt: 'Image Four'
    },
    {
      src: "assets/training_images/Assistantship/5.PNG",
      alt: 'Image Five'
    },
    {
      src: "assets/training_images/Assistantship/6.PNG",
      alt: 'Image Six'
    },
    {
      src: "assets/training_images/Assistantship/7.PNG",
      alt: 'Image Seven'
    },
    {
      src: "assets/training_images/Assistantship/8.PNG",
      alt: 'Image Eight'
    },
    {
      src: "assets/training_images/Assistantship/9.PNG",
      alt: 'Image Nine'
    },
    {
      src: "assets/training_images/Assistantship/10.PNG",
      alt: 'Image Ten'
    },
    {
      src: "assets/training_images/Assistantship/11.PNG",
      alt: 'Image Eleven'
    },
    {
      src: "assets/training_images/Assistantship/end.PNG",
      alt: 'Ending Image'
    }
    ]
    Tech_assistants :any= [{
      src: "assets/training_images/Tech_assistants/1.PNG",
      alt: 'Image One'
    },
    {
      src: "assets/training_images/Tech_assistants/2.PNG",
      alt: 'Image Two'
    },
    {
      src: "assets/training_images/Tech_assistants/3.PNG",
      alt: 'Image Three'
    },
    {
      src: "assets/training_images/Tech_assistants/4.PNG",
      alt: 'Image Four'
    },
    {
      src: "assets/training_images/Tech_assistants/5.PNG",
      alt: 'Image Five'
    },
    {
      src: "assets/training_images/Tech_assistants/6.PNG",
      alt: 'Image Six'
    },
    {
      src: "assets/training_images/Tech_assistants/7.PNG",
      alt: 'Image Seven'
    },
    {
      src: "assets/training_images/Tech_assistants/8.PNG",
      alt: 'Image Eight'
    },
    {
      src: "assets/training_images/Tech_assistants/9.PNG",
      alt: 'Image Nine'
    },
    {
      src: "assets/training_images/Tech_assistants/10.PNG",
      alt: 'Image Ten'
    },
    {
      src: "assets/training_images/Tech_assistants/11.PNG",
      alt: 'Image Eleven'
    },
    {
      src: "assets/training_images/Tech_assistants/12.PNG",
      alt: 'Image Twelve'
    },
    {
      src: "assets/training_images/Tech_assistants/13.PNG",
      alt: 'Image Thirteen'
    },
    {
      src: "assets/training_images/Tech_assistants/14.PNG",
      alt: 'Image Fourteen'
    },
    {
      src: "assets/training_images/Tech_assistants/end.PNG",
      alt: 'Enging Image'
    }
    ]
departName:any;
  constructor() { }

  ngOnInit(): void {
    this.departName=localStorage.getItem("department");
    switch(this.departName){
      case "Chick-fil-a": { 
        this.images=this.Chickfila;
        break; 
     } 
     case "Fuzzys Taco Shop": { 
        this.images=this.Fuzzys;
        break; 
     } 
     case "Burger-King": { 
      this.images=this.Burger_king;
      break; 
   } 
   case "Cafeteria": { 
    this.images=this.Cafeteria;
    break; 
 } 
   case "Assistantship": { 
   this.images=this.Assistantship;
    break; 
  } 
  case "Tech Assistant": { 
    this.images=this.Assistantship;
     break; 
   } 
    }
    // this.len = Object.keys(this.images).length - 1;
  }

}
