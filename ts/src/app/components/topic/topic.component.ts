import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  mostrarFormulario: boolean = false;
  mostrarFormularioRespondido: boolean = false;
  mostrarRespostaCard: boolean = false;
  assunto: string = '';
  conteudo: string = '';
  mostrarCard: boolean = false;
  cards: {
    assunto: string;
    conteudo: string;
    likes: number;
    resposta: number;
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    // Recupere os dados salvos em localStorage durante a inicialização
    const savedCards = localStorage.getItem('savedCards');
    if (savedCards) {
      this.cards = JSON.parse(savedCards);
    }
  }

  mostrarCampoFormulario() {
    this.mostrarFormulario = true;
  }

  mostrarCampoFormularioRespondido() {
    this.mostrarFormularioRespondido = true;
  }

  mostrarCamposCard(event: MouseEvent) {
    this.mostrarCard = !this.mostrarCard
    event.preventDefault();

  }

  enviarFormulario() {
    // Adicione os dados do formulário à matriz de cards
    const novoCard = {
      assunto: this.assunto,
      conteudo: this.conteudo,
      likes: Math.floor(Math.random() * 50) + 2, // Número aleatório entre 1 e 50
      resposta: Math.floor(Math.random() * 50) + 2, // Número aleatório entre 1 e 50
    };

    this.cards.push(novoCard);

    // Salve os dados no localStorage
    localStorage.setItem('savedCards', JSON.stringify(this.cards));

    // Inverta a ordem dos cards para mostrar o último primeiro
    this.cards.reverse();

    // Após o envio, exiba os cards
    this.mostrarCard = true;

    // Limpe os campos do formulário, se necessário
    this.assunto = '';
    this.conteudo = '';
  }
}
