'use server';

export type PhotoType = {
	id: number;
	author: string;
	title: string;
	date: string;
	src: string;
	peso: string;
	idade: string;
	acessos: string;
	total_comments: string;
};

export async function photo_get() {
	const response = await fetch(
		'https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0',
	);
	const data = (await response.json()) as PhotoType[];

	return data;
}
