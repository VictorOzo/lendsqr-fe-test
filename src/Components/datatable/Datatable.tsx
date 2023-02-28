import './datatable.scss';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import vector from '../../images/vector.png';

const columns: GridColDef[] = [
	{ field: 'orgName', headerName: 'Organisation', width: 120 },
	{ field: 'userName', headerName: 'Username', width: 120 },
	{ field: 'email', headerName: 'Email', width: 200 },
	{
		field: 'phoneNumber',
		headerName: 'Phone Number',

		width: 200,
	},
	{ field: 'createdAt', headerName: 'Date Joined', width: 150 },
	{ field: 'satus', headerName: 'Status', width: 90 },
];

export const Datatable = () => {
	const [data, setData] = useState([]);
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	function showOptions() {
		if (display === 'none') {
			setDisplay('block');
		} else {
			setDisplay('none');
		}
	}

	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 90,
			renderCell: () => {
				return (
					<div className='cellAction'>
						<div className='viewButton'>
							<img src={vector} alt='options' onClick={showOptions} />
							<div className='dropdown'>
								<ul style={{ display: display }}>
									<li>
										<a href='*'>View details</a>
									</li>
									<li>
										<a href='*'>Blacklist User</a>
									</li>
									<li>
										<a href='*'>Activate User</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div style={{ height: 700, width: '1000px', padding: '30px' }}>
			<DataGrid
				rows={data}
				columns={columns.concat(actionColumn)}
				pageSize={11}
				rowsPerPageOptions={[11]}
			/>
		</div>
	);
};
