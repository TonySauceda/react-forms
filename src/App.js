import { useState } from 'react'

const App = () => {
	const [value, setValue] = useState({ normal: '', texto: '', select: '', checkbox: false, radio: '1' })

	const handleChange = ({ target }) => {
		// Hambas formas tienen el mismo comportamiento
		setValue({ ...value, [target.name]: target.type === 'checkbox' ? target.checked : target.value })
		// setValue((state) => ({
		// 	...value,
		// 	[target.name]: target.type === 'checkbox' ? target.checked : target.value,
		// }))
	}

	console.log(value)

	return (
		<div>
			{value < 5 ? <span>Logitud minima de 5</span> : null}
			<input type="text" name="normal" value={value.normal} onChange={handleChange} />
			<textarea name="texto" onChange={handleChange} value={value.texto} />
			<select name="select" onChange={handleChange} value={value.select}>
				<option value="">-- Seleccione --</option>
				<option value="1">Opcion 1</option>
				<option value="2">Opcion 2</option>
				<option value="3">Opcion 3</option>
			</select>
			<input type="checkbox" name="checkbox" checked={value.checkbox} onChange={handleChange} />
			<div>
				<input id="lbl1" type="radio" name="radio" value="1" onChange={handleChange} checked={value.radio === '1'} />
				<label htmlFor="lbl1">Opcion 1</label>
				<input id="lbl2" type="radio" name="radio" value="2" onChange={handleChange} checked={value.radio === '2'} />
				<label htmlFor="lbl2">Opcion 2</label>
				<input id="lbl3" type="radio" name="radio" value="3" onChange={handleChange} checked={value.radio === '3'} />
				<label htmlFor="lbl3">Opcion 3</label>
			</div>
		</div>
	)
}

export default App
