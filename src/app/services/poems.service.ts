import { Poem } from './../models/poem.model';
import { Band } from './../models/band.model';
import {Injectable} from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
@Injectable()
export class PeomService{
    private poemListRef= this.db.list<Poem>('peom-list');
    private bandListRef= this.db.list<Band>('band-list');

    constructor(private db:AngularFireDatabase){}
    getSongsList(){
        return this.poemListRef;
    }
    filterByString(band:string){
        return this.db.list('/poem-list',ref=>ref.orderByChild('band').equalTo(band));
    }
    assembleBandFilteredList(ctxt):any{
        //return(this.filterByString(ctxt));
    }
    addSong(poem:Poem){
        return this.poemListRef.push(poem);
    }
    addBand(band:Band){
        return this.bandListRef.push(band);
    }
    getBandList(){
        return this.bandListRef;
    }
    editSong(poem:Poem){
return this.poemListRef.update(poem.key,poem);
    }
removeSong(poem:Poem){
    return this.poemListRef.remove(poem.key);
}
}