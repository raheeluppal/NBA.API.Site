import { Component, OnInit } from '@angular/core';
import {TeamService} from "../services/team.service";

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  selected: number;
  team: any;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams(1).subscribe(data => { this.team = data; })
  }

  select() {
    this.teamService.getTeams(this.selected).subscribe(data => { this.team = data; })
  }

}
