export default function apiError(err: unknown): {
	data: null;
	ok: false;
	error: string;
} {
	if (err instanceof Error) {
		return { ok: false, error: err.message, data: null };
	} else {
		return { ok: false, error: 'Erro genérico', data: null };
	}
}
