import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'task tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor (
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddTask = value)
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }
}
