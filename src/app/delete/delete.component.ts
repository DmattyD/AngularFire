import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})


export class DeleteComponent implements OnInit {
  deletePageForm: FormGroup;
  slug: string;

  constructor(private formBuilder: FormBuilder,
    oktaAuth: OktaAuthService,
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
  }

}
