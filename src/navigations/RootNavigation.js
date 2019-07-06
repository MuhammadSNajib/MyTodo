import { createStackNavigator, createAppContainer } from "react-navigation";

import TodoList from './../screens/List';

const MainNavigator = createStackNavigator({
  TodoList: {
    screen: TodoList,
    navigationOptions: ({ navigation }) => ({
      title: `Todo List`,
    }),
  }
});

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation;