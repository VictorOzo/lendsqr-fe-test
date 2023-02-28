import './dashboard.scss';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import { Navbar } from '../../Layouts/navbar/Navbar';
import { Widgets } from '../../Layouts/widgets/Widgets';
import { Datatable } from '../../datatable/Datatable';

export const Dashboard = () => {
	return (
		<div className='dashboard'>
			<Sidebar />
			<div className='dashboardContainer'>
				<Navbar />
				<div className='dashboardtext'>
					<h3>Users</h3>
				</div>
				<div className='widgets'>
					<Widgets
						icon={<i className='fa-solid fa-user-group one'></i>}
						title='users'
						num='2,453'
					/>
					<Widgets
						icon={<i className='fa-solid fa-users two'></i>}
						title='active users'
						num='2,453'
					/>
					<Widgets
						icon={<i className='fa-solid fa-file-contract three'></i>}
						title='users with loans'
						num='12,453'
					/>
					<Widgets
						icon={<i className='fa-sharp fa-solid fa-coins four'></i>}
						title='users with savings'
						num='102,453'
					/>
				</div>
				<div className='datatable'>
					<Datatable />
				</div>
			</div>
		</div>
	);
};
