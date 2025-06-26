import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", 
    "Jest", "JUnit", "Java", "Spring Boot","SQL", "Git", "Agile", "Postman", "VersionOne"];
    skillPositions: string[][]=[];
    skillRotation: string[] = [];
    isDragging = false;
    currentlyDragging: number | undefined;
    mouseX: number | undefined;
    mouseY: number | undefined;
    
    ngOnInit(){
      for(let i=0; i < this.skills.length; i++) { 
        let pos: string[]= [i * (90 / this.skills.length) + '%', ((i+1) % 3) * 33 + '%', this.getRandomRotation()];
        this.skillPositions.push(pos);
      }
    }
  
  getRandomRotation() {
    let randomVal = (Math.random() * 30) - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging(i: number) {
    this.isDragging = true;
    this.currentlyDragging = i;
    console.log('START DRAGGING');
  }

  mouseMove(e: MouseEvent) { 
    if(!this.isDragging) { return; }
    this.mouseX = e.pageX - 70;
    this.mouseY = e.pageY - 30;
  }
  
  stopDragging() {
    this.currentlyDragging = undefined;
  }
  }

