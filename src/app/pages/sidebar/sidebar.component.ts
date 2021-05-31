import { Component } from '@angular/core';
import { AbstractComponent } from 'src/app/utility.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends AbstractComponent {

  constructor(private router: Router) { super(); }

  logout() {

    // TODO:
    //precisa apagar o token...

    this.router.navigate(['/login']);
  }

}
