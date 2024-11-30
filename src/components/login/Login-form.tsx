'use client';

import login from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/Button';

function FormButton() {
	const { pending } = useFormStatus();

	return pending ? (
		<Button disabled={pending}>Carregando...</Button>
	) : (
		<Button>Entrar</Button>
	);
}

export default function LoginForm() {
	const [state, action] = useFormState(login, {
		ok: false,
		error: '',
		data: null,
	});

	return (
		<>
			<form action={action}>
				<input type="text" name="username" placeholder="Usuário" id="" />
				<input type="password" name="password" placeholder="Senha" />
				<FormButton />
				{state.error && <p>{state.error}</p>}
			</form>
		</>
	);
}
