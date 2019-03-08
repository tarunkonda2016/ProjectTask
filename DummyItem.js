import React, { Component } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class DummyItem extends Component {

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.quantity !== this.props.quantity
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
                <Text style={{ flex: 0.8, fontSize: 20, color: 'black', textAlign: 'left' }} >{this.props.name} ${this.props.rate}</Text>
                <TouchableOpacity onPress={() => this.props.onSubClick(this.props)}>
                    <Text style={{ marginLeft: 10, marginRight: 10, alignItems: 'center', alignSelf: 'center' }}>-</Text>
                </TouchableOpacity>
                <Text style={{ width : 50 , marginLeft: 10,marginRight : 10 ,  fontSize: 20, color: 'black', alignItems: 'center', alignSelf: 'center' }}>{this.props.quantity === 0 ? 'Add' : this.props.quantity}</Text>
                <TouchableOpacity onPress={() => this.props.onAddClick(this.props)}>
                    <Text style={{marginRight: 10, alignItems: 'center', alignSelf: 'center' }}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
