import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SelectionComponent } from "./selection/selection.component";
import { AppRoudingModule } from "./app-routing.module";




@NgModule({
  declarations: [AppComponent, HomeComponent, SelectionComponent],
  imports: [BrowserModule,AppRoudingModule],
  providers: [],
})
export class AppModule {}