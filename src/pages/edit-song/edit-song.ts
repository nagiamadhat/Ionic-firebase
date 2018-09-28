import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeomService } from '../../app/services/poems.service';
import { Poem } from '../../app/models/poem.model';
/**
 * Generated class for the EditSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html',
})
export class EditSongPage {
song:Poem;
  constructor(public navCtrl: NavController, public navParams: NavParams,private poemservice:PeomService) {
  }

  ionViewWillLoad() {
   this.song= this.navParams.get('song');
  }
  saveSong(song:Poem){
    this.poemservice.editSong(song).then(()=>{
    this.navCtrl.setRoot('HomePage')}
    )
  }
deleteSong(song:Poem){
  this.poemservice.removeSong(song).then(()=>{
    this.navCtrl.setRoot('HomePage')
  })
}
}
