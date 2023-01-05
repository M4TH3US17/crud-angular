import { Component } from '@angular/core';

import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent {
  public people;

  constructor(private personService: PersonService) {
    this.people = personService.getPeople();
  }
}
