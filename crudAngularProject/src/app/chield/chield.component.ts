import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.scss']
})
export class ChieldComponent {
  @Input() chieldMessage:string | undefined;
 @Output() message= new EventEmitter<String>();
 send(){
  this.message.emit('hellow from chield');
 }
 recive(msg: any){
  alert(msg);
  
 }
}
