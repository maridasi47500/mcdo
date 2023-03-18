import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Campaign } from './campaign';
import { Firstcat } from './firstcat';
import { Secondcat } from './secondcat';
import { Flavor } from './flavor';
import { Item } from './item';
import { Cat } from './cat';

import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Storage } from '@ionic/storage-angular';
export interface Myitem {
    id:number;
    cat_id:number;
    name:string;
    description:string;
    image:string;
    url:string;
}

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;
  itemsList = new BehaviorSubject([]);
  catsList = new BehaviorSubject([]);
  postsList = new BehaviorSubject([]);
  campaignsList = new BehaviorSubject([]);
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
      
      
    this.platform.ready().then(() => {
this.createDatabaseObject()
      
    });
  }
  createDatabaseObject(): void {
      this.sqlite.create({
        name: 'my_otherdb_name.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
          console.log(db)
                    this.storage = db;
          this.getFakeData();
      });
  }
   
  // Render fake data
   /*fillDatabase() {
    this.httpClient.get('assets/dump.sql', 
        {responseType: 'text'})
      .subscribe(sql => {
        this.sqlPorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }*/
  dbState() {
    return this.isDbReady.asObservable();
  }
 
  fetchItems(): Observable<Item[]> {
    return this.itemsList.asObservable();
  }
    // Render fake data
    
  // Get list
  getItems(){
    return this.storage.executeSql('SELECT * FROM items', []).then(res => {
      let items: Item[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            cat_id: res.rows.item(i).cat_id,
            url: res.rows.item(i).url,
            description: res.rows.item(i).description
           });
        }
      }
      return this.itemsList.next(items);
    });
  }
  getCats(){
    return this.storage.executeSql('SELECT * FROM flavors', []).then(res => {
      let cats: Flavor[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          cats.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            url: res.rows.item(i).url,
            description: res.rows.item(i).description
           });
        }
      }
      
      this.catsList.next(cats);
    });
  }
  getFakeData() {
      this.httpClient.get(
        'assets/dump.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
          alert("this data"+data)
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
              console.log(this.getItems())
            this.getItems();
            this.getCats();
             console.log(this.catsList)
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }
  // Add
  addItem(name, image) {
    let data = [name, image];
    return this.storage.executeSql('INSERT INTO items (name, image) VALUES (?, ?)', data)
    .then(res => {
      this.getItems();
    });
  }
 
  // Get single object
  getItem(id): Promise<Item> {
    return this.storage.executeSql('SELECT * FROM items WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            cat_id: res.rows.item(0).cat_id,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      }
    });
  }
  // Update
  updateItem(id, item: Item) {
    let data = [item.name, item.image];
    return this.storage.executeSql(`UPDATE items SET name = ?, image = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getItems();
    })
  }
  // Delete
  deleteItem(id) {
    return this.storage.executeSql('DELETE FROM items WHERE id = ?', [id])
    .then(_ => {
      this.getItems();
    });
  }
  getItemsByCat(id) {
    return this.storage.executeSql('select * FROM items WHERE cat_id = ?', [id])
    .then(_ => {
      this.getItems();
    });
  }
  getCatByUrl(id): Promise<Flavor> {
    return this.storage.executeSql('SELECT * FROM flavors WHERE url = ?', [id]).then(res => { 
    
      return {
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      }
    });
  }
  getCatById(id): Promise<Flavor> {
    return this.storage.executeSql('SELECT * FROM flavors WHERE id = ?', [id]).then(res => { 
    alert("ok");
      return {
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      }
    });
  }
  getItemsByCatUrl(id) {
    return this.storage.executeSql("select items.*, flavors.url as myurl,flavors.id as myid FROM items left join flavors on flavors.id = items.cat_id group by items.id having myurl like ?", [id])
    .then(_ => {
      this.getItems();
    });
  }
}
