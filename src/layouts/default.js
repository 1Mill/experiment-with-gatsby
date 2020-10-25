import React from 'react'

const styles = {
	border: '3px solid red',
	margin: '100px',
	padding: '1rem',
}
export default ({ children }) => (
	<div style={ styles }>
		{ children }
	</div>
)
