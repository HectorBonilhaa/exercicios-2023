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
    // Constante para recuperar os dados salvos em localStorage durante a inicialização
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
    this.mostrarCard = !this.mostrarCard;
    event.preventDefault();
  }

  enviarFormulario() {
    // Adicione os dados do formulário à matriz de cards
    const novoCard = {
      assunto: this.assunto,
      conteudo: this.conteudo,

      // Número aleatório entre 1 e 50
      likes: Math.floor(Math.random() * 50) + 2,
      resposta: Math.floor(Math.random() * 50) + 2,
    };

    this.cards.push(novoCard);

    // Salvando os dados no localStorage
    localStorage.setItem('savedCards', JSON.stringify(this.cards));

    // Ordenando a exibição dos cards para do último criado até o card que está mockado.
    this.cards.reverse();

    // Exibir o card após o envio
    this.mostrarCard = true;

    // Gerando o valor dos inputs para null
    this.assunto = '';
    this.conteudo = '';
  }
}
