//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Flavor } from './flavor';
import { Item } from './item';
@Injectable()
export class BaseDatosLocalProvider {
  // Array donde se almacenará la información contenida en la BD
  datos: any = [];
  itemsList = new BehaviorSubject([]);
  catsList = new BehaviorSubject([]);

  // Variable que se usará con subscribe para detectar BD preparada 
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: HttpClient, private platform: Platform, private sqlite: SQLite, private sqliteporter: SQLitePorter, 
        private alertCtrl: AlertController) {
    // Inicialmente se indica que la BD no está aún proeparada
    this.databaseReady = new BehaviorSubject(false);
    this.abrirBaseDatos();
  }

  abrirBaseDatos() {
    // Make ready to platform
    this.platform.ready()
      .then(() => {
        // Crear o abrir la base de datos MiAppBD.db
        this.sqlite.create({
          name: 'MiAppBD.db',
          location: 'default'
        })
          .then((db: SQLiteObject) => {
            // Consulta para comprobar si ya existen los datos
            db.executeSql('SELECT * FROM tableItems', [])
              .then(res => {
                // Los datos ya estaban en la BD
                this.alertCtrl.create({
                  message: 'Los datos ya estaban en la BD',
                  buttons: ['Aceptar']
                });
                // Procesar los datos de la base de datos
                this.datos = this.obtenerDatos(db);
                // Informar que la base de datos está lista
                this.databaseReady.next(true);
              }) 
              .catch(res => {
                // Los datos no están en la BD. Hay que importarlos
                this.alertCtrl.create({
                  message: 'on a pu importer la base de données',
                  buttons: ['ok']
                });
                // Obtener el archivo que contiene las sentencias SQL
                this.http.get('assets/CreerBaseDonnees.sql', 
        {responseType: 'text'})
                  .subscribe(sql => {
                    // Ejecutar las sentencias SQL del archivo
                    this.sqliteporter.importSqlToDb(db, sql)
                      .then(() => {
                        // Procesar los datos de la base de datos
                        this.datos = this.obtenerDatos(db);
                        // Informar que la base de datos está lista
                        this.databaseReady.next(true);
                      }).catch(e => {
                        alert("erreur pour importer la base de données");
                        console.error("erreur pour importer la base de données", e.message);
                      });
                  })
              });
          });
      }).catch(e => alert('Platform is not ready.'));    
  }

  obtenerDatos(baseDatos) {
    let resultado = [];
    // Realizar la consulta a la BD para extraer los datos
    baseDatos.executeSql('SELECT * FROM tableItems', [])
      .then(resSelect => {
        // Recorrer todas las filas obtenidas
        for (var i = 0; i < resSelect.rows.length; i++) { 
          // Añadir al array de datos la información desglosada
          resultado.push({ 
            unTextoCorto: resSelect.rows.item(i).unTextoCorto, 
            unTextoLargo: resSelect.rows.item(i).unTextoLargo 
          });
        } 
      }).catch(e => {
        alert("Error: No se ha podido consultar los datos",);
        console.error("Error en Select de consulta de datos", e.message);
      });
    return resultado;
  }

  /*
  * Método para obtener el Observable que se utilizará con susbcribe
  * para detectar cuándo está lista la base de datos
  */
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
  getItemsByCat(id) {
    return this.datos.executeSql('select * FROM items WHERE cat_id = ?', [id])
    .then(_ => {
      this.getItems();
    });
  }
  getItemsByCatUrl(id) {
    return this.datos.executeSql("select items.*, flavors.url as myurl,flavors.id as myid FROM items left join flavors on flavors.id = items.cat_id group by items.id having myurl like ?", [id])
    .then(_ => {
      this.getItems();
    });
  }
  getCatByUrl(id): Promise<Flavor> {
    return this.datos.executeSql('SELECT * FROM flavors WHERE url = ?', [id]).then(res => { 
    
      return {
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      }
    });
  }
    getItems(){
    return this.datos.executeSql('SELECT * FROM items', []).then(res => {
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
}