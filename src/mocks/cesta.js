import logo from '../../assets/logo.png';
import açai from '../../assets/frutas/açai.png';
import hamburguer from '../../assets/frutas/hambúrguer.png';
import combo from '../../assets/frutas/combo.png';
import batata from '../../assets/frutas/batatafrita.png';
import CocaCola from '../../assets/frutas/CocaCola.png';

const cesta = {
  topo: {
    titulo: "Detalhe da compra",
  },
  detalhes: {
    nome: "Cesta de Hamburguers",
    logoFazenda: logo,
    nomeFazenda: "BurgerBrio Diner",
    descricao: "No BurgerBrio Diner, cada hambúrguer é uma obra de arte culinária. A equipe de chefs dedicados não tem medo de ousar, misturando ingredientes frescos e sazonais para criar combinações inovadoras de sabores somente para você.",
    preco: "R$ 100,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Açai copo",
        imagem: açai,
      },
      {
        nome: "Combo 3 Hambúrguer",
        imagem: hamburguer,
      },
      {
        nome: "Combo do dia",
        imagem: combo,
      },
      {
        nome: "Batata Frita Grande",
        imagem: batata,
      },
      {
        nome: "Coca Cola 2L ",
        imagem: CocaCola,
      }
    ]
  }
}

export default cesta;