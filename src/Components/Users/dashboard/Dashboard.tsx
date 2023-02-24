import './dashboard.scss';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import { Navbar } from '../../Layouts/navbar/Navbar';

export const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Sidebar />
			<div className='dashboardContainer'>
				<Navbar />
				Dashboard
			</div>
		</div>
	);
};
