import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revision_Angular';
  placeholder = "chercher..."

  ngOnInit(): void {
   $('#bu').on('click', function() {
    $('.rouge').css('color', 'red');
   })
    
  }
}
