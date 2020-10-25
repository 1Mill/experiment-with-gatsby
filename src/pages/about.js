import React from 'react'
import Layout from '../layouts/default'
import { Link } from 'gatsby'

export default () => (
	<Layout>
		<main>
			<h1>About me</h1>
			<p>Welcome to my Gatsby site.</p>
			<Link to='/'>Home page</Link>
		</main>
	</Layout>
)
