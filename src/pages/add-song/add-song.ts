import { Band } from './../../app/models/band.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PeomService } from '../../app/services/poems.service';
import {Poem} from '../../app/models/poem.model';

/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {

song:Poem={
  title:'',
  chords:'',
  lyrics:'',
  band:''

}
  constructor(public navCtrl: NavController, public navParams: NavParams,private poemservice:PeomService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }
  addSong(song:Poem){
    this.poemservice.addSong(song).then(ref=>{
      this.navCtrl.setRoot('HomePage',{key:ref.key});
    })
  }

}
