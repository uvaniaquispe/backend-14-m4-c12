// Una vez completadas las funciones, convertilas en métodos estaticos de la clase Book.

import DB from '../database/books.json';
import { writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';

const PATH = './src/database/books.json';

interface BookData {
    name: string;
    released: string;
    author: string;
}

class Book {
	name;
	released;
	author;
	id;

	constructor( book: BookData) {
		const {
			name, released, author 
		} = book
		this.name = name;
		this.released = released;
		this.author = author;
		this.id = this.#createUUID();
	}

	#createUUID(): string {
		return randomUUID();
	}

	getAge() {
		const date = new Date();
		const currentYear = date.getFullYear();
		const releasedDate = Number(this.released);

		return currentYear - releasedDate;
	}
}

const findBookByTitle = (title: string) =>
	DB.find((book) => book.id.includes(title)); // Completar

function uploadNewBook(book: Book): boolean {
	const isBookOnDB = findBookByTitle(book.name);

	if (isBookOnDB) return false;

	// Completar
	DB.push(book);
	const stringifiedDB = JSON.stringify(DB);
	writeFileSync(PATH, stringifiedDB);

	return true;
}

export {} // Exportá los métodos estaticos


