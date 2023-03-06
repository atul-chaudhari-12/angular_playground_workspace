import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate.guard';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  serverId: number;
  allowServerEdit: boolean = false;
  changesSaved: boolean;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.serverId = +this.route.snapshot.params.id;
    this.server = this.serversService.getServer(this.serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((queryparams: Params) => {
      this.allowServerEdit = queryparams.allowEdit == "1" ? true : false;
    });
    this.route.params.subscribe((params: Params) => {
      this.serverId = +params.id;
      this.server = this.serversService.getServer(this.serverId);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id,
      { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  canDeactivate = (): boolean | Observable<boolean> | Promise<boolean> => {
    if (!this.allowServerEdit) {
      return true;
    }
    if ((this.server.name != this.serverName || this.server.id != this.serverId) && !this.changesSaved) {
      return confirm("Do you want to discard the changes?");
    }
    return true;
  };

}
