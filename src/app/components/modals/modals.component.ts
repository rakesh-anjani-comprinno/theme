import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [],
  templateUrl: './modals.component.html',
  providers: [BsModalService]
})
export class ModalsComponent {
  modalRef?: BsModalRef;
   constructor(private modalService: BsModalService) {}

   openModal(template: TemplateRef<void>) {
     this.modalRef = this.modalService.show(template,{
      class:'modal-sm',
      animated:true,
      keyboard:true,
      // ignoreBackdropClick:false,
      backdrop:true
     });
   }

   confirm(){
    this.modalRef?.hide()
   }

   decline(){
    this.modalRef?.hide()
   }
}
