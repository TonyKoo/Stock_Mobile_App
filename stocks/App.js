import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Portfolio from './screens/Portfolio';
import Detail from './screens/Detail';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Stocks" component={Home} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Portfolio" component={Portfolio} />
				<Stack.Screen name="Stock Detail" component={Detail} />
				{/* <Stack.Screen name="Show List" component={ShowList} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
