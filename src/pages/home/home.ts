import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeomService } from '../../app/services/poems.service';
import {Poem} from '../../app/models/poem.model';
import {Band} from '../../app/models/band.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  poemsList$: Observable<Poem[]>;
  bandsList$:Observable<Band[]>;
  band:Band={name:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private poemservice:PeomService) {
    this.poemsList$= this.poemservice.getSongsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
     )
   );
  }

  ionViewDidLoad() {
    this.bandsList$= this.poemservice.getBandList().snapshotChanges().pipe(map(changes=>
     changes.map (c=>({
        key:c.payload.key, ...c.payload.val()
      }))
    )
    )
  }
// onContextChange(ctxt:string) : void {
// this.poemsList$= this.poemservice.assembleBandFilteredList(ctxt).snapshotChanges().pipe(map(changes=>
//   changes.map (c=>({
//     key:c.payload.key, ...c.payload.val()
//   }))
// )
// )
// }
showAllSongs(){
  this.poemsList$= this.poemservice.getSongsList().snapshotChanges().pipe(map(changes=>
     changes.map (c=>({
      key:c.payload.key, ...c.payload.val()
    }))
)
  )
}
}
