import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pessoa = {
    foto: 'https://i.pinimg.com/736x/4e/f3/2d/4ef32dbfc1758cdf1a1c769231607a0c.jpg',
    nome: 'Lucca Magalhães Lara',
    ocupacao: 'Programador',
    email: '@luccamagalhaes',
    lingua: 'Português',
    cep: 'Tatuí/SP',
    atuacao: 'desde Janeiro de 2020'
  },
  postagens: [

  ],
  conta: [
    {
      num: '45.6K',
      curtida: 'curtidas',
      seguindo: 'seguindo',
      amigos: 'amigos'
    }
  ]
  constructor(){ }
}
