import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = { "id": this.route.snapshot.params["id"], "name": this.route.snapshot.params["name"] };
    this.paramsSubscription = this.route.params
      .subscribe((params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      })
  }

  openUser = (id, name) => {
    this.router.navigate(["/users", id, name]);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
