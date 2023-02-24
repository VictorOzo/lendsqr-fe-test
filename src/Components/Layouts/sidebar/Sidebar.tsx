import './sidebar.scss';
import Union from '../../../images/Union.png';
import lendsqr from '../../../images/lendsqr.png';

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='top'>
				<div className='logo'>
					<img className='logoImg' src={Union} alt='' />
					<img className='name' src={lendsqr} alt='' />
				</div>
				<ul className='topmenu'>
					<li>
						<i className='fa-solid fa-briefcase  icon'></i>
						<span className='menu'>Switch Organisation</span>
						<i className='fa-solid fa-angle-down down'></i>
					</li>
				</ul>
			</div>
			<div className='center'>
				<ul>
					<li>
						<i className='fa-solid fa-house-chimney icon'></i>
						<span className='dashboard'>Dashboard</span>
					</li>
					<p className='title'>CUSTOMERS</p>
					<li>
						<i className='fa-solid fa-user-group icon'></i>
						<span>Users</span>
					</li>
					<li>
						<i className='fa-solid fa-users  icon'></i>
						<span>Guarantors</span>
					</li>
					<li>
						<i className='fa-solid fa-sack-dollar icon'></i>
						<span>loans</span>
					</li>
					<li>
						<i className='fa-solid fa-handshake icon'></i>
						<span>Decison Model</span>
					</li>
					<li>
						<i className='fa-solid fa-piggy-bank icon'></i>
						<span>Savings</span>
					</li>
					<li>
						<i className='fa-solid fa-hand-holding-dollar icon'></i>
						<span>Loan Requests</span>
					</li>
					<li>
						<i className='fa-solid fa-user-check icon'></i>
						<span>Whitelist</span>
					</li>
					<li>
						<i className='fa-solid fa-user-xmark icon'></i>
						<span>Karma</span>
					</li>

					<p className='title'>BUSINESSES</p>

					<li>
						<i className='fa-solid fa-briefcase icon'></i>
						<span>Organisations</span>
					</li>
					<li>
						<i className='fa-solid fa-hand-holding-dollar icon'></i>
						<span>Loan Products</span>
					</li>
					<li>
						<i className='fa-solid fa-landmark icon'></i>
						<span>Savings Products</span>
					</li>
					<li>
						<i className='fa-solid fa-coins icon'></i>
						<span>Fees and Charges</span>
					</li>
					<li>
						<i className='fa-solid fa-mobile icon'></i>
						<span>Transactions</span>
					</li>
					<li>
						<i className='fa-solid fa-fan icon'></i>
						<span>Services</span>
					</li>
					<li>
						<i className='fa-solid fa-user-gear icon'></i>
						<span>Service Account</span>
					</li>
					<li>
						<i className='fa-solid fa-scroll icon'></i>
						<span>Settlements</span>
					</li>
					<li>
						<i className='fa-solid fa-chart-column icon'></i>
						<span>Reports</span>
					</li>
					<p className='title'>SETTINGS</p>
					<li>
						<i className='fa-solid fa-sliders icon'></i>
						<span>Preferences</span>
					</li>
					<li>
						<i className='fa-solid fa-percent icon'></i>

						<span>Fees and Pricing</span>
					</li>
					<li>
						<i className='fa-regular fa-clipboard icon'></i>
						<span>Audit Logs</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
