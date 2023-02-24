import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Users/login/Login';
import { Dashboard } from './Components/Users/dashboard/Dashboard';
import { Details } from './Components/Users/details/Details';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Login />} />
						<Route path='users'>
							<Route index element={<Dashboard />} />
							<Route path=':userId' element={<Details />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
