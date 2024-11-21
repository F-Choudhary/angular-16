import { Component } from '@angular/core';

@Component({
  selector: 'app-assig3',
  templateUrl: './assig3.component.html',
  styleUrl: './assig3.component.css'
})
export class Assig3Component {
  showSecret = false
  log = []

  onToggleDisplay(){
    this.showSecret = !this.showSecret
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }
}
