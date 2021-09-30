import { useRef } from 'react'

const App = () => {
	const input = useRef()
	const file = useRef()

	const submit = () => {
		console.log(input.current.value)
		console.log(file.current.files[0])

		const data = new FormData()
		data.append('archivo', file.current.files[0])
		data.append('campo', input.current.value)

		fetch('/temp', { method: 'POST', body: data })
	}

	return (
		<div>
			<div>
				<span>Temp</span>
				<input type="text" name="campo" ref={input} />
				<input type="file" name="archivo" ref={file} />
			</div>
			<input type="submit" value="Enviar" onClick={submit} />
		</div>
	)
}

export default App
