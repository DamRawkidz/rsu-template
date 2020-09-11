import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rsu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Output() onToggleMenu = new EventEmitter<boolean>()
  isExpandMenu: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isExpandMenu = !this.isExpandMenu
    this.onToggleMenu.emit(this.isExpandMenu)
  }


}
