import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,} from 'react-native';


class App extends Component {
  //Estrutura do Botão
  constructor(props){
    super(props);
    this.state = {
      nome1: '',
      nome2: '',
      nome3: '',
      nome4: '',
      nome5: ''
    };
  }
 
  //Estrutura Interna do Botão/ Mensagem de Resposta//


  entrar1 = () => {
    this.setState(prevState => ({
      nome1: prevState.nome1
      // Se já estiver visível, esconde
        ? '' : `
    🥬 Alface romana: Rica em fibras, vitaminas A e K, ajuda na digestão e saúde óssea.
    🧀 Queijo parmesão: Fonte de proteínas e cálcio, fortalece ossos e dentes.
    🍗 Peito de frango (opcional): Proteína magra, ideal para o crescimento muscular.
    🥖 Croutons: Carboidratos e crocância, mas aumentam as calorias.
    🍋🥄 Molho Caesar: Com azeite e limão, traz antioxidantes e faz bem pro coração.`
    }));
  }


  entrar2 = () => {
    this.setState(prevState => ({
      nome2: prevState.nome2
        ? '': `
    🍅 Tomate: Rico em licopeno e vitamina C, fortalece a imunidade e protege o coração.
    🧀 Mussarela de búfala: Fonte de proteínas e cálcio, essencial para ossos e músculos.
    🌿 Manjericão: Antioxidante natural, auxilia na digestão e reduz inflamações.
    🥄 Azeite de oliva: Rico em gorduras saudáveis, ajuda na saúde do coração.
    🧂 Sal e pimenta: Realçam o sabor e podem melhorar o metabolismo.`
    }));
  }


  entrar3 = () => {
    this.setState(prevState => ({
      nome3: prevState.nome3
        ? '' : `
    🥬 Alface: Rica em fibras e vitamina A, melhora a digestão.
    🥭 Manga: Alta em vitamina C, ajuda na imunidade.
    🍍 Abacaxi: Contém bromelina, facilita a digestão e reduz inchaço.
    🥝 Kiwi: Rico em vitamina C, melhora a imunidade e digestão.
    🍓 Morangos: Antioxidantes, bons para o coração e pele.
    🥥 Coco ralado: Gorduras saudáveis, ajuda no colesterol.
    🥜 Castanhas: Fonte de proteínas e antioxidantes.
   🍯🍋 Molho de iogurte com mel e limão: Melhora a digestão e tem antioxidantes.`
    }));
  }


  entrar4 = () => {
    this.setState(prevState => ({
      nome4: prevState.nome4
        ? '': `
    🥔 Batata: Fonte de energia e rica em potássio, boa para os músculos.
    🍳 Ovos cozidos: Ricos em proteínas e colina, ótimos para o cérebro.
    🧅 Cebola: Tem antioxidantes e ajuda na imunidade.
    🌿 Salsinha: Refresca, é diurética e cheia de vitamina C.
    🥄 Maionese: Dá cremosidade e fornece gorduras boas (com moderação).
    🧂 Sal e pimenta: Realçam o sabor e podem estimular a digestão.`
    }));
  }


  entrar5 = () => {
    this.setState(prevState => ({
      nome5: prevState.nome5
        ? '': `
    🦐 Camarão: Rico em proteínas e zinco, ótimo para músculos e imunidade.
    🥑 Abacate: Cheio de gorduras boas e potássio, faz bem pro coração.
    🍅 Tomate cereja: Antioxidantes e vitamina C, protege a pele e a imunidade.
    🧅 Cebola roxa: Anti-inflamatória e boa pra circulação.
   🍋 Suco de limão: Refrescante, rico em vitamina C e ajuda na digestão.
   🌿 Coentro ou salsinha: Detox natural e rica em antioxidantes.
   🧂 Sal e pimenta: Realçam o sabor e ativam o metabolismo.`
    }));
  }


  render() {
    return (
      <ScrollView style={{ padding: 10 }}>


      <Topo imagem={{ uri: 'https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg' }}>
      </Topo>


        <SaladaCaesar
          imagem={{ uri: "https://i.pinimg.com/736x/23/f7/d6/23f7d6bd173fccf563760b1685485ce2.jpg" }}
          titulo="Salada Caesar"
          entrar={this.entrar1} nome1={this.state.nome1}
        />
        <SaladaCaprese
          imagem={{ uri: "https://i.pinimg.com/736x/7b/35/ec/7b35ecc474bb29cb25a7625e7a631fbc.jpg"}}
          titulo="Salada Caprese"
          entrar={this.entrar2} nome2={this.state.nome2}
        />
        <SaladaTropical
          imagem={{ uri: 'https://i.pinimg.com/736x/5a/0c/28/5a0c28c09130eaef6ea62fd87be79126.jpg' }}
          titulo="Salada Tropical"
          entrar={this.entrar3} nome3={this.state.nome3}
          />


        <SaladadeBatata
          imagem={{ uri: 'https://i.pinimg.com/736x/a3/2a/cc/a32acc5bffce7f6d637a2e3679cfb726.jpg' }}
          titulo="Salada de Batata"
          entrar={this.entrar4} nome4={this.state.nome4}
          />


        <SaladaCamarao
          imagem={{ uri: 'https://i.pinimg.com/736x/48/00/df/4800df78ae209d12b3f8ef6d84ee1ea2.jpg'}}
          titulo="Salada de Camarão com Abacate"
          entrar={this.entrar5} nome5={this.state.nome5}
        />


      </ScrollView>
    );
  }
}


class Topo extends Component {
  render() {
    return (


      //Style do Container//
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#a6b985'  }}>
     
         <Image
          source={this.props.imagem}
          style={{ width: '100%', height: 400, borderRadius: 20, marginTop: 0, overflow: 'hidden',}}
        />  
          <Text style={{ color: '#006400', fontSize: 50, marginBottom: 0, fontFamily: 'Baskerville Old Face',  padding: '15px',}}>
          Saladas
        </Text>


        <Text style={{ fontSize: 20, color: '#4f2621', fontFamily: 'Ink Free' ,padding: '8px', fontWeight: 'bold' }}>
          Refrescantes, coloridas e cheias de sabor, as saladas são leves, crocantes e perfeitas para qualquer momento. Além de nutritivas, deixam a refeição mais equilibrada e deliciosa. Experimente com molhos naturais, queijos, castanhas e um toque de azeite!
        </Text>


      </View>
    );
  }
}


class SaladaCaesar extends Component {
  render() {
    return (


      //Style do Container//
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592',  flexDirection:  'column',
      alignItems: 'center'}}>


    <Image
      source={this.props.imagem} style={{ width: 150,  height: 150, borderRadius: 75, marginTop: 10, }}/>


    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',  }}>
      {this.props.titulo}
    </Text>


    <TouchableOpacity onPress={this.props.entrar}
      style={{backgroundColor: '#9f8241', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 20, marginTop: 10, marginBottom: 20 }}>
     
      <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Baskerville Old Face', textAlign: 'center' }}>
       Ingredientes 🥗
      </Text>
    </TouchableOpacity>


    <Text style={{
      fontSize: 20,
      color: '#4f2621',
      textAlign: 'left',
      paddingHorizontal: 20,
      paddingBottom: 20,
      lineHeight: 26,
      fontFamily: 'Baskerville Old Face',
      fontWeight: 'bold',
      maxWidth: '100%'}}>


        {this.props.nome1}  
    </Text>
      </View>
    )
  }
}


class SaladaCaprese extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592',  flexDirection:  'column',
      alignItems: 'center'}}>


    <Image
      source={this.props.imagem} style={{ width: 150,  height: 150, borderRadius: 75, marginTop: 10}}/>


    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',  }}>
      {this.props.titulo}
    </Text>


    <TouchableOpacity onPress={this.props.entrar}
      style={{backgroundColor: '#9f8241', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 20, marginTop: 10, marginBottom: 20 }}>
     
      <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Baskerville Old Face', textAlign: 'center' }}>
        Ingredientes 🥗
      </Text>
    </TouchableOpacity>


    <Text style={{
      fontSize: 20,
      color: '#4f2621',
      textAlign: 'left',
      paddingHorizontal: 20,
      paddingBottom: 20,
      lineHeight: 26,
      fontFamily: 'Baskerville Old Face',
      fontWeight: 'bold',
      maxWidth: '100%'}}>


        {this.props.nome2}  
    </Text>
      </View>
    )
  }
}




class SaladaTropical extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592',  flexDirection:  'column',
      alignItems: 'center'}}>


    <Image
      source={this.props.imagem} style={{ width: 150,  height: 150, borderRadius: 75, marginTop: 10}}/>


    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',  }}>
      {this.props.titulo}
    </Text>


    <TouchableOpacity onPress={this.props.entrar}
      style={{backgroundColor: '#9f8241', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 20, marginTop: 10, marginBottom: 20 }}>
     
      <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Baskerville Old Face', textAlign: 'center' }}>
        Ingredientes 🥗
      </Text>
    </TouchableOpacity>


    <Text style={{
      fontSize: 20,
      color: '#4f2621',
      textAlign: 'left',
      paddingHorizontal: 20,
      paddingBottom: 20,
      lineHeight: 26,
      fontFamily: 'Baskerville Old Face',
      fontWeight: 'bold',
      maxWidth: '100%'}}>


        {this.props.nome3}  
    </Text>
      </View>
    )
  }
}


class SaladadeBatata extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592',  flexDirection:  'column',
      alignItems: 'center'}}>


    <Image
      source={this.props.imagem} style={{ width: 150,  height: 150, borderRadius: 75, marginTop: 10}}/>


    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',  }}>
      {this.props.titulo}
    </Text>


    <TouchableOpacity onPress={this.props.entrar}
      style={{backgroundColor: '#9f8241', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 20, marginTop: 10, marginBottom: 20 }}>
     
      <Text style={{ fontSize: 30, color: 'white', fontFamily: 'Baskerville Old Face', textAlign: 'center' }}>
        Ingredientes 🥗
      </Text>
    </TouchableOpacity>


    <Text style={{
      fontSize: 20,
      color: '#4f2621',
      textAlign: 'left',
      paddingHorizontal: 20,
      paddingBottom: 20,
      lineHeight: 26,
      fontFamily: 'Baskerville Old Face',
      fontWeight: 'bold',
      maxWidth: '100%'}}>


        {this.props.nome4}  
    </Text>
      </View>
    )
  }
}


class SaladaCamarao extends Component {
  render() {
    return (


      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592',  flexDirection:  'column',
      alignItems: 'center'}}>


    <Image
      source={this.props.imagem} style={{ width: 150,  height: 150, borderRadius: 75, marginTop: 10}}/>


    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',  }}>
      {this.props.titulo}
    </Text>


    <TouchableOpacity onPress={this.props.entrar}
      style={{
      backgroundColor: '#9f8241',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 20,
      marginTop: 10,
      marginBottom: 20 }}>
     
      <Text style={{ fontSize: 30, color: 'white',  fontFamily: 'Baskerville Old Face', textAlign: 'center' }}>
        Ingredientes 🥗
      </Text>
     
    </TouchableOpacity>


    <Text style={{
      fontSize: 20,
      color: '#4f2621',
      textAlign: 'left',
      paddingHorizontal: 20,
      paddingBottom: 20,
      lineHeight: 26,
      fontFamily: 'Baskerville Old Face',
      fontWeight: 'bold',
      maxWidth: '100%'}}>


     {this.props.nome5}  
    </Text>
      </View>
    )
  }
}


export default App;


