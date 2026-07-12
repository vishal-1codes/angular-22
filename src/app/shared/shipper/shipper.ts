import { Component,inject } from '@angular/core';
import { Loader } from '../../core/services/loader';
@Component({
  selector: 'app-shipper',
  imports: [],
  templateUrl: './shipper.html',
  styleUrl: './shipper.scss',
})
export class Shipper {
  loader=inject(Loader)
}
