import React from 'react';
import { Container } from 'reactstrap';

const Layout = (props) => {
	return (
		<React.Fragment>
				{props.children}
		</React.Fragment>
	);
}

export default Layout;