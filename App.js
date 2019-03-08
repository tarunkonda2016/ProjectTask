/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DummyItem from './DummyItem'

let ipd = {
    "name": "Super iPad",
    "rate": 549.99,
    "quantity": 0
}
let mbp = {
    "name": "Mac book pro",
    "rate": 1399.99,
    "quantity": 0
}
let atv = {
    "name": "Apple tv",
    "rate": 109.50,
    "quantity": 0
}
let vga = {
    "name": "VGA adapter",
    "rate": 30,
    "quantity": 0
}


export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.onAddClick = this.onAddClick.bind(this)
    this.onSubClick = this.onSubClick.bind(this)
    this.state = {
        products: [ipd, mbp, atv, vga],
        total : 0
    }


}


onSubClick= (item)=> {
    let total = 0

    let value = this.state.products.map((data) => {
        if (item.name === data.name) {
            if(data.quantity !== 0){
            total = total + (data.quantity - 1) * data.rate
            }
            return { ...data, quantity: data.quantity !== 0 ? data.quantity - 1  : data.quantity}
        }
        total = total + data.quantity * data.rate

        return data
    })



    this.setState({ products: value , total : total })
}

onAddClick = (item) => {
    let total = 0

    let value = this.state.products.map((data) => {
        if (item.name === data.name) {
            total = total + (data.quantity + 1) * data.rate
            return { ...data, quantity: data.quantity + 1 }
        }
        total = total + data.quantity * data.rate

        return data
    })



    this.setState({ products: value , total : total })
}

renderItem = ({ item }) => {
    return <DummyItem {...item} onAddClick={this.onAddClick} onSubClick={this.onSubClick} />
}



render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.products}
                extraData={this.state}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Text style={{flex : 1 , color : 'black' , fontSize : 25}}>Total ${this.state.total}</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
},
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
addStyle: {
    flex: 0.2,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    paddingTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
    flexDirection: 'row',
    height: 45,
},
addTextStyle: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold'
}
});
