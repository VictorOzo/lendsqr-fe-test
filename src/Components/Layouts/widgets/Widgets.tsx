import './widget.scss';

export const Widgets = (props: any) => {
	return (
		<div className='widget'>
			<div className='item'>
				<span className='icon'>{props.icon}</span>
				<span className='title'>{props.title}</span>
				<span className='num'>{props.num}</span>
			</div>
		</div>
	);
};
