import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
  }

  // loadServers = () => {
  //   this.router.navigate(["servers"], { relativeTo: this.route })
  // }

  loadServer = (id) => {
    this.router.navigate(["/servers", id, "edit"], { queryParams: { "allowEdit": 1 }, fragment: "loading" });
  }

  onLogin = () => {
    this.authService.login();
  }

  onLogOut = () => {
    this.authService.logOut();
  }
}
