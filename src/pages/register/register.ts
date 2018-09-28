import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Band} from '../../app/models/band.model';
import {PeomService } from '../../app/services/poems.service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  band:Band={name:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, private poemservice:PeomService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  addband(band:Band){
    this.poemservice.addBand(band).then(ref=>{
      this.navCtrl.setRoot('HomePage',{key:ref.key})
    })
  }
}
