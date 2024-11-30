'use server';

import { TOKEN_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function login(state: {}, formData: FormData) {
	const username = formData.get('username') as string | null;
	const password = formData.get('password') as string | null;

	try {
		if (!username) throw new Error('Preencha o campo de usuário');
		if (!password) throw new Error('Preencha o campo de senha');
		const { url } = TOKEN_POST();
		const response = await fetch(url, {
			method: 'POST',
			body: formData,
		});

		if (!response.ok) throw new Error('Senha ou usuário inválidos');

		const data = await response.json();

		cookies().set('token', data.token, {
			httpOnly: true,
			secure: true,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24,
		});
		return { data: null, ok: true, error: '' };
	} catch (err: unknown) {
		return apiError(err);
	}
}
