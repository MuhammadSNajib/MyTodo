import React, { Fragment, Component } from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import * as actionTodos from './../redux/actions/todos';

class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      titleTask: ""
    }
  }


  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>


          <View style={styles.conteiner}>

            <TextInput
              style={styles.textInput}
              underlineColorAndroid={"transparent"}
              underlineColorios={"transparent"}
              placeholder='Tulis task kamu disini ya ..'
              returnKeyType={"send"}
              value={this.state.titleTask}
              onChangeText={(text) => this.setState({ titleTask: text })}
              onSubmitEditing={() => this.props.addTodos({ id: Math.floor(Math.random() * 9), title: this.state.titleTask })} />


            <View style={styles.containerList}>
              {this.props.todos.data.length !== 0 && this.props.todos.data.map((item, i) => (
                <View key={i} style={styles.list}>
                  <Text style={styles.textList}>{item.title}</Text>
                  <View style={styles.row} >
                    <Icon name={"edit"} type={"font-awesome"} />
                    <Icon name={"trash"} type={"font-awesome"} />
                  </View>
                </View>
              ))}
            </View>

            {this.props.todos.data.length === 0 &&
              <View style={styles.contentEmpty}>
                <Image resizeMode={"contain"} style={{ height: 150 }} source={require("./../assets/img/empty-file.png")} />
                <Text style={styles.textInfo}>{"Yaah! Kamu belum punya task nih. Bikin ya.."}</Text>
              </View>
            }

          </View>
        </ScrollView>
      </Fragment>
    )
  }
};




const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodos: (value) => dispatch(actionTodos.addTodos(value))
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row'
  },
  conteiner: {
    flex: 1
  },
  contentEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInfo: {
    fontSize: 20,
    fontWeight: '500',
    color: '#B0B9D2',
    textAlign: 'center',
    width: '80%',
    marginTop: 20
  },
  textInput: {
    marginTop: 20,
    backgroundColor: '#e5e8f0',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 20
  },
  containerList: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#B0B9D2'
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: '#B0B9D2',
    flexDirection: 'row'
  },
  textList: {
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#252d41'
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

// export default List