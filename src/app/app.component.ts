import { Component, ViewChild } from '@angular/core';
import { CompoundCardComponent } from './compound-card/compound-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CompoundCardComponent) compoundCard: CompoundCardComponent | undefined;
  
  title = 'interview-project';
  
  compoundClicked = false;
  selectedCompoundId: string;

  onCardClick(compoundId: string): void {
    this.compoundClicked = true;
    this.selectedCompoundId = compoundId;
  }

  onBackClick(): void {
    this.compoundClicked = false;
    this.selectedCompoundId = null;
  }

  getSortIcon(): string {
    if (this.compoundCard) {
      return this.compoundCard.getSortIcon();
    }
    return ''; 
  }

  toggleSortOrder() {
    if (this.compoundCard) {
      return this.compoundCard.toggleSortOrder();
    }
    return '';
  }
}
