import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [{ name: 'Angular', icon: 'assets/links/angular_icon.gif' },
  { name: 'HTML5', icon: 'assets/links/html5.png' },
  { name: 'CSS3', icon: 'assets/links/CSS3.png' },
  { name: 'Bootstrap', icon: 'assets/links/bootstrap.png' },
  { name: 'Jest', icon: 'assets/links/jest.png' },
  { name: 'JUnit', icon: 'assets/links/junit.png' },
  { name: 'Java', icon: 'assets/links/java.png' },
  { name: 'Spring Boot', icon: 'assets/links/spring_icon.png' },
  { name: 'SQL', icon: 'assets/links/sql_icon.png' },
  { name: 'Git', icon: 'assets/links/git_icon.png' },
  { name: 'Agile', icon: 'assets/links/agile_icon.png' },
  { name: 'Postman', icon: 'assets/links/postman_icon.png' },
  { name: 'VersionOne', icon: 'assets/links/versionone_icon.png' }];
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

