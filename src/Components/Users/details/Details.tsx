import { Navbar } from '../../Layouts/navbar/Navbar';
import { Sidebar } from '../../Layouts/sidebar/Sidebar';
import { UserInfo } from '../../userInfo/UserInfo';
import './details.scss';

export const Details = () => {
	return (
		<div className='detailsWrapper'>
			<Sidebar />
			<div className='detailsContainer'>
				<Navbar />
				<p>
					<i className='fa-solid fa-arrow-left icon'></i>Back to Users
				</p>
				<div className='detailsText'>
					<h3>User Details</h3>
					<div className='detailsButton'>
						<a className='black' href='*'>
							Blacklist User
						</a>
						<a className='active' href='*'>
							Activate User
						</a>
					</div>
				</div>
				<div className='userprofile'>
					<div className='credentials'>
						<i className='fa-solid fa-user icon'></i>
						<div className='name'>
							<h3>Grace Effiom</h3>
							<p>LSQFf587g90</p>
						</div>
						<div className='vl1'></div>
						<div className='tier'>
							<p>User's tier</p>
							<div className='tierIcon'>
								<i className='fa-solid fa-star'></i>
								<i className='fa-regular fa-star'></i>
								<i className='fa-regular fa-star'></i>
							</div>
						</div>
						<div className='vl2'></div>
						<div className='bankdetails'>
							<h3>₦200,000</h3>
							<p>9912345678/Providus Bank</p>
						</div>
						<div className='links'>
							<p>General Details</p>
							<p>Documents</p>
							<p>Bank Details</p>
							<p>Loans</p>
							<p>Savings</p>
							<p>App and System</p>
						</div>
					</div>
				</div>
				<UserInfo/>
			</div>
		</div>
	);
};
