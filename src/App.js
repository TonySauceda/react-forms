import { useState } from 'react'

const App = () => {
	const [value, setValue] = useState({ normal: '', texto: '' })

	const handleChange = (e) => {
		// Hambas formas tienen el mismo comportamiento

		setValue({ ...value, [e.target.name]: e.target.value })
		// setValue((state) => ({ ...value, [e.target.name]: e.target.value }))
	}

	console.log(value)

	return (
		<div>
			{value < 5 ? <span>Logitud minima de 5</span> : null}
			<input type="text" name="normal" value={value.normal} onChange={handleChange} />
			<textarea name="texto" onChange={handleChange} value={value.texto} />
		</div>
	)
}

export default App
