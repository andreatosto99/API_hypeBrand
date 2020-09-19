import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

import { NavController } from '@ionic/angular';
import { __await } from 'tslib';


@Component({
  selector: 'app-inserimento-item',
  templateUrl: './inserimento-item.page.html',
  styleUrls: ['./inserimento-item.page.scss'],
})

export class InserimentoItemPage implements OnInit {

  constructor(
   
    public alertController: AlertController,
    public navCtrl: NavController,
    public toastController: ToastController) { }

    objItem: any = 
    {
      sku: "",
      name: "",
      color: "",
      gender: "",
      price: ""
    };

    skuToPass: string;
    nameToPass: string;
    colorToPass: string;
    genderToPass: string;
    price: number;

  ngOnInit() {
  }

  async popupConfermaInserimentoItem() {
    const alert = await this.alertController.create({
      header: "Conferma inserimento",
      message: "Vuoi confermare?",
      buttons: [
        {
          text: "Annulla",
          role: "cancel",
        },
        {
          text: "Conferma",
          handler: (value: any) => {
            this.modify();
          },
        },
      ],
    });

    await alert.present();
    
  }


  async modify() {
    
    
      this.objItem["sku"] = this.skuToPass;
      this.objItem["name"] = this.nameToPass;
      this.objItem["color"] = this.colorToPass;
      this.objItem["gender"] = this.genderToPass;
      this.objItem["price"] = this.price;
      
    
      this.toastSuccess();
      this.navCtrl.back();
    }


    toastSuccess() {
      const toast = document.createElement("ion-toast");
      toast.message = "Modifiche effettuate!";
      toast.duration = 2000;
      toast.position = "top";
      toast.style.fontSize = "20px";
      toast.color = "success";
      toast.style.textAlign = "center";
      document.body.appendChild(toast);
      return toast.present();
    }
  }

