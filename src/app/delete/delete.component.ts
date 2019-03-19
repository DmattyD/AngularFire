import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})


export class DeleteComponent implements OnInit {

  constructor(private oktaAuth: OktaAuthService,
    private db: AngularFirestore,
    private route: ActivatedRoute) {
}

  ngOnInit() {
  }

}
