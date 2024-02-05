import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute,private router: Router) { }
 
logIn(){
  this.router.navigate(['/selection'],{ queryParams: { category: 'logIn' }});
}
guestLogIn(){
  this.router.navigate(['/selection'],{ queryParams: { category: 'guest' }});
}

click1='';
click2='hidden';

signUp(){
  this.click1='hidden';
  this.click2=''; 
}

}
