import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})



export class ModalComponent implements OnInit {
  @Input() public user;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }
}
