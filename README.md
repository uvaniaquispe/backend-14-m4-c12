<h1 align="center"> Git Colaborativo y Métodos estáticos </h1>

<img src="https://www.earthdatascience.org/images/earth-analytics/git-version-control/github-fork-repo.gif" />

<h2 align="center"> Forks y pull requests </h2>

Fork (bifurcar) --> Clonar un repo de una cuenta de GitHub en la nuestra.

Pull Request --> Es una herramienta que permite proponer mejoras o cambios en un proyecto. Es una petición que el propietario del fork le hace al propietario del repositorio original "forkeado", para que este último incorpore los cambios contenidos en el fork.

Ambas herramientas, `forks` y `pull requests` (PRs), son fundamentales a la hora de **trabajar de forma colaborativa** con **GitHub**. Veamos el paso a paso para crear PRs:

1. Forkear el repo original.
2. Clonar el `fork` de nuestra cuenta a la máquina local.
3. Realizar todos los **cambios/commits** necesarios.
4. Pushear los cambios al `fork`.
5. Crear una `Pull Request` en **GitHub** desde nuestro `fork`.
6. Describir **claramente** los cambios propuestos.
7. Esperar que el propietario del repo original apruebe los cambios.

<h2 align="center"> Métodos estáticos </h2>

Los métodos estáticos son funciones que están asociadas directamente a una Clase y que pueden ser accedidos sin necesidad de instanciarla:

    class Movie {
        name;
        age;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        static getMoviesOlderThan(age) {
            return moviesDB.filter((movie) => movie.age > age);
        }

        getAge() {
            this.age;
        }
    }

En este caso, para acceder al método estático, sólo lo vamos a poder usar de la siguiente forma: `Movie.getMoviesOlderThan(35);`.

En cambio, para acceder al método getAge(), va a ser necesario instanciar la clase Movie, para luego tener disponible getAge() que se relaciona directamente con el objeto instanciado:

`const ran = new Movie('Ran', 60);`
`ran.getAge();` // 60

<h2 align="center"> LINKS </h2>

- [¿Cómo commitear como un pro?](https://www.youtube.com/watch?v=SigVVJmUGv8)
- [Métodos estáticos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)
