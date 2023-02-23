import Union from '../../../images/Union.png';
import lendsqr from '../../../images/lendsqr.png';
import signinImg from '../../../images/signinImg.png';
import './login.scss';

export const Login = () => {
	return (
		<>
			<div className='loginContainer'>
				<div className='heroSide'>
					<div className='logoImg'>
						<img className='logo' src={Union} alt='logo' />
						<img className='name' src={lendsqr} alt='Lendsqr' />
					</div>
					<div className='heroImg'>
						<img src={signinImg} alt='Img' />
					</div>
				</div>
				<div className='formSide'>
					<h2>Welcome !</h2>
					<p>Enter details to login. </p>
					<form>
						<input type='Email' placeholder='Email' />
						<input type='password' placeholder='Password' />
						<a href='*'>FORGOT PASSWORD?</a>
						<input type='submit' value='LOG IN' />
					</form>
				</div>
			</div>
		</>
	);
};
