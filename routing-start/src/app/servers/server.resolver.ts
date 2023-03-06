import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";

interface iServer {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResover implements Resolve<iServer> {
    constructor(private serverService: ServersService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): iServer | Observable<iServer> | Promise<iServer> {
        let id = +route.params["id"];
        return this.serverService.getServer(id);
    }
}