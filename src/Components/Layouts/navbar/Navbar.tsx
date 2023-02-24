import './navbar.scss';
import image4 from '../../../images/image4.png';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<form>
						<input type='search' placeholder='Search for anything' />
						<button>
							<i className='fa-solid fa-magnifying-glass icon'></i>
						</button>
					</form>
				</div>
				<div className='navitems'>
					<div className='item'>
						<a href='*'>Docs</a>
					</div>
					<div className='item'>
						<i className='fa-regular fa-bell icon'></i>
					</div>
					<div className='item'>
						<img src={image4} alt='' />
						<p className='name'>Adedeji</p>
						<i className='fa-solid fa-caret-down icon'></i>
					</div>
				</div>
			</div>
		</div>
	);
};
