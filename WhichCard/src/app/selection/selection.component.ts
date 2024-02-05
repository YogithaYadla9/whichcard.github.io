import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent implements OnInit {
constructor(private router:Router,private activateRoute: ActivatedRoute){}

check="hidden";
uncheck="f1-pos"
selectedcard="Zolve aspire";
selectedItem='Airbnb';
loginID='';
account='';
ngOnInit(): void {
 this.activateRoute.queryParamMap.subscribe((params: any) => 
this.loginID=params.params.category);

if(this.loginID =='guest'){
   this.account='hidden'
}

}

 logOut(){
 this.router.navigate(['/home'])
 }

 selectedCredit = 'Zolve aspire';
 selectedCard(value:string): void {
		this.selectedCredit = value;
	}

  OnCheck(){
    this.check="";
    this.uncheck="";
    this.selectedcard=this.selectedCredit
    this.selectedItem=this.purchaseItem
  }
purchaseItem='Airbnb'
  Onpurchase(value:string){
   this.purchaseItem=value;
  }

}
