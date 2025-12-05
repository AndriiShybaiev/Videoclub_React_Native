// src/data/movies.ts
export interface Movie {
    id: string;
    title: string;
    year: string;
    director: string;
    poster: string;
    rented: string;
    synopsis: string;
    created_at: string;
    updated_at: string;
}

export const MOVIES: Movie[] = [
    {
        id: "1",
        title: "El padrino",
        year: "1972",
        director: "Francis Ford Coppola",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX214_AL_.jpg",
        rented: "0",
        synopsis: "Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Freddie (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen (Robert Duvall), se niega a intervenir en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "2",
        title: "El Padrino. Parte II",
        year: "1974",
        director: "Francis Ford Coppola",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX214_AL_.jpg",
        rented: "0",
        synopsis: "Continuación de la historia de los Corleone por medio de dos historias paralelas: la elección de Michael Corleone como jefe de los negocios familiares y los orígenes del patriarca, el ya fallecido Don Vito, primero en Sicilia y luego en Estados Unidos, donde, empezando desde abajo, llegó a ser un poderosísimo jefe de la mafia de Nueva York.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "3",
        title: "La lista de Schindler",
        year: "1993",
        director: "Steven Spielberg",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX214_AL_.jpg",
        rented: "0",
        synopsis: "Segunda Guerra Mundial (1939-1945). Oskar Schindler (Liam Neeson), un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes (1939), consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente (Ben Kingsley), también judío, es el verdadero director en la sombra, pues Schindler carece completamente de conocimientos para dirigir una empresa.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "4",
        title: "Pulp Fiction",
        year: "1994",
        director: "Quentin Tarantino",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SY317_CR4,0,214,317_AL_.jpg",
        rented: "1",
        synopsis: "Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín. ",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "5",
        title: "Cadena perpetua",
        year: "1994",
        director: "Frank Darabont",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros de prisión, especialmente de Red (Morgan Freeman), el jefe de la mafia de los sobornos.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "6",
        title: "El golpe",
        year: "1973",
        director: "George Roy Hill",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTY5MjM1OTAyOV5BMl5BanBnXkFtZTgwMDkwODg4MDE@._V1._CR52,57,915,1388_SX214_AL_.jpg",
        rented: "0",
        synopsis: "Chicago, años treinta. Redford y Newman son dos timadores que deciden vengar la muerte de un viejo y querido colega, asesinado por orden de un poderoso gángster (Robert Shaw). Para ello urdirán un ingenioso y complicado plan con la ayuda de todos sus amigos y conocidos.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "7",
        title: "La vida es bella",
        year: "1997",
        director: "Roberto Benigni",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTQwMTM2MjE4Ml5BMl5BanBnXkFtZTgwODQ2NTYxMTE@._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo (Toscana) con la intención de abrir una librería. Allí conoce a Dora y, a pesar de que es la prometida del fascista Ferruccio, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "8",
        title: "Uno de los nuestros",
        year: "1990",
        director: "Martin Scorsese",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTY2OTE5MzQ3MV5BMl5BanBnXkFtZTgwMTY2NTYxMTE@._V1_SX214_AL_.jpg",
        rented: "0",
        synopsis: "Henry Hill, hijo de padre irlandés y madre siciliana, vive en Brooklyn y se siente fascinado por la vida que llevan los gángsters de su barrio, donde la mayoría de los vecinos son inmigrantes. Paul Cicero, el patriarca de la familia Pauline, es el protector del barrio. A los trece años, Henry decide abandonar la escuela y entrar a formar parte de la organización mafiosa como chico de los recados; muy pronto se gana la confianza de sus jefes, gracias a lo cual irá subiendo de categoría. ",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "9",
        title: "Alguien voló sobre el nido del cuco",
        year: "1975",
        director: "Milos Forman",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTk5OTA4NTc0NF5BMl5BanBnXkFtZTcwNzI5Mzg3OA@@._V1_SY317_CR12,0,214,317_AL_.jpg",
        rented: "0",
        synopsis: "Randle McMurphy (Jack Nicholson), un hombre condenado por asalto, y un espíritu libre que vive contracorriente, es recluido en un hospital psiquiátrico. La inflexible disciplina del centro acentúa su contagiosa tendencia al desorden, que acabará desencadenando una guerra entre los pacientes y el personal de la clínica con la fría y severa enfermera Ratched (Louise Fletcher) a la cabeza. La suerte de cada paciente del pabellón está en juego.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "10",
        title: "American History X",
        year: "1998",
        director: "Tony Kaye",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjMzNDUwNTIyMF5BMl5BanBnXkFtZTcwNjMwNDg3OA@@._V1_SY317_CR17,0,214,317_AL_.jpg",
        rented: "0",
        synopsis: "Derek (Edward Norton), un joven \"skin head\" californiano de ideología neonazi, fue encarcelado por asesinar a un negro que pretendía robarle su furgoneta. Cuando sale de prisión y regresa a su barrio dispuesto a alejarse del mundo de la violencia, se encuentra con que su hermano pequeño (Edward Furlong), para quien Derek es el modelo a seguir, sigue el mismo camino que a él lo condujo a la cárcel.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "11",
        title: "Sin perdón",
        year: "1992",
        director: "Clint Eastwood",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTkzNTc0NDc4OF5BMl5BanBnXkFtZTcwNTY1ODg3OA@@._V1_SY317_CR5,0,214,317_AL_.jpg",
        rented: "0",
        synopsis: "William Munny (Clint Eastwood) es un pistolero retirado, viudo y padre de familia, que tiene dificultades económicas para sacar adelante a su hijos. Su única salida es hacer un último trabajo. En compañía de un viejo colega (Morgan Freeman) y de un joven inexperto (Jaimz Woolvett), Munny tendrá que matar a dos hombres que cortaron la cara a una prostituta.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "12",
        title: "El precio del poder",
        year: "1983",
        director: "Brian De Palma",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX214_AL_.jpg",
        rented: "0",
        synopsis: "Tony Montana es un emigrante cubano frío y sanguinario que se instala en Miami con el propósito de convertirse en un gángster importante. Con la colaboración de su amigo Manny Rivera inicia una fulgurante carrera delictiva con el objetivo de acceder a la cúpula de una organización de narcos.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "13",
        title: "El pianista",
        year: "2002",
        director: "Roman Polanski",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "Wladyslaw Szpilman, un brillante pianista polaco de origen judío, vive con su familia en el ghetto de Varsovia. Cuando, en 1939, los alemanes invaden Polonia, consigue evitar la deportación gracias a la ayuda de algunos amigos. Pero tendrá que vivir escondido y completamente aislado durante mucho tiempo, y para sobrevivir tendrá que afrontar constantes peligros.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "14",
        title: "Seven",
        year: "1995",
        director: "David Fincher",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTQwNTU3MTE4NF5BMl5BanBnXkFtZTcwOTgxNDM2Mg@@._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "El veterano teniente Somerset (Morgan Freeman), del departamento de homicidios, está a punto de jubilarse y ser reemplazado por el ambicioso e impulsivo detective David Mills (Brad Pitt). Ambos tendrán que colaborar en la resolución de una serie de asesinatos cometidos por un psicópata que toma como base la relación de los siete pecados capitales: gula, pereza, soberbia, avaricia, envidia, lujuria e ira. Los cuerpos de las víctimas, sobre los que el asesino se ensaña de manera impúdica, se convertirán para los policías en un enigma que les obligará a viajar al horror y la barbarie más absoluta.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "15",
        title: "El silencio de los corderos",
        year: "1991",
        director: "Jonathan Demme",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX214_AL_.jpg",
        rented: "0",
        synopsis: "El FBI busca a \"Buffalo Bill\", un asesino en serie que mata a sus víctimas, todas adolescentes, después de prepararlas minuciosamente y arrancarles la piel. Para poder atraparlo recurren a Clarice Starling, una brillante licenciada universitaria, experta en conductas psicópatas, que aspira a formar parte del FBI. Siguiendo las instrucciones de su jefe, Jack Crawford, Clarice visita la cárcel de alta seguridad donde el gobierno mantiene encerrado a Hannibal Lecter, antiguo psicoanalista y asesino, dotado de una inteligencia superior a la normal. Su misión será intentar sacarle información sobre los patrones de conducta de \"Buffalo Bill\".",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "16",
        title: "La naranja mecánica",
        year: "1971",
        director: "Stanley Kubrick",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY317_CR0,0,214,317_AL_.jpg",
        rented: "0",
        synopsis: "Gran Bretaña, en un futuro indeterminado. Alex (Malcolm McDowell) es un joven muy agresivo que tiene dos pasiones: la violencia desaforada y Beethoven. Es el jefe de la banda de los drugos, que dan rienda suelta a sus instintos más salvajes apaleando, violando y aterrorizando a la población. Cuando esa escalada de terror llega hasta el asesinato, Alex es detenido y, en prisión, se someterá voluntariamente a una innovadora experiencia de reeducación que pretende anular drásticamente cualquier atisbo de conducta antisocial.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "17",
        title: "La chaqueta metálica",
        year: "1987",
        director: "Stanley Kubrick",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjA4NzY4ODk4Nl5BMl5BanBnXkFtZTgwOTcxNTYxMTE@._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "Un grupo de reclutas se prepara en Parish Island, centro de entrenamiento de la marina norteamericana. Allí está el sargento Hartman, duro e implacable, cuya única misión en la vida es endurecer el cuerpo y el alma de los novatos, para que puedan defenderse del enemigo. Pero no todos los jóvenes están preparados para soportar sus métodos. ",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "18",
        title: "Blade Runner",
        year: "1982",
        director: "Ridley Scott",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTA4MDQxNTk2NDheQTJeQWpwZ15BbWU3MDE2NjIyODk@._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "A principios del siglo XXI, la poderosa Tyrell Corporation creó, gracias a los avances de la ingeniería genética, un robot llamado Nexus 6, un ser virtualmente idéntico al hombre pero superior a él en fuerza y agilidad, al que se dio el nombre de Replicante. Estos robots trabajaban como esclavos en las colonias exteriores de la Tierra. Después de la sangrienta rebelión de un equipo de Nexus-6, los Replicantes fueron desterrados de la Tierra. Brigadas especiales de policía, los Blade Runners, tenían órdenes de matar a todos los que no hubieran acatado la condena. Pero a esto no se le llamaba ejecución, se le llamaba \"retiro\". ",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "19",
        title: "Taxi Driver",
        year: "1976",
        director: "Martin Scorsese",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMTQ1Nzg3MDQwN15BMl5BanBnXkFtZTcwNDE2NDU2MQ@@._V1_SY317_CR9,0,214,317_AL_.jpg",
        rented: "0",
        synopsis: "Para sobrellevar el insomnio crónico que sufre desde su regreso de Vietnam, Travis Bickle (Robert De Niro) trabaja como taxista nocturno en Nueva York. Es un hombre insociable que apenas tiene contacto con los demás, se pasa los días en el cine y vive prendado de Betsy (Cybill Shepherd), una atractiva rubia que trabaja como voluntaria en una campaña política. Pero lo que realmente obsesiona a Travis es comprobar cómo la violencia, la sordidez y la desolación dominan la ciudad. Y un día decide pasar a la acción.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "20",
        title: "El club de la lucha",
        year: "1999",
        director: "David Fincher",
        poster: "http://gbrain.dlsi.ua.es/videoclub/assets/imgs/posters/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX214_AL_.jpg",
        rented: "1",
        synopsis: "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje en avión conoce a un carismático vendedor de jabón que sostiene una teoría muy particular: el perfeccionismo es cosa de gentes débiles; sólo la autodestrucción hace que la vida merezca la pena. Ambos deciden entonces fundar un club secreto de lucha, donde poder descargar sus frustaciones y su ira, que tendrá un éxito arrollador.",
        created_at: "2015-01-29 10:46:46",
        updated_at: "2015-01-29 10:46:46"
    },
    {
        id: "520",
        title: "Frantz",
        year: "2016",
        director: "François Ozon",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTU3YWRjN2UtMjI1MC00OTY3LThlOGQtZGNmOGNjZDdhNmQ5XkEyXkFqcGdeQXVyNjYzMTM2ODE@._V1_SY1000_CR0,0,734,1000_AL_.jpg",
        rented: "1",
        synopsis: "Una pequeña ciudad alemana, poco tiempo después de la I Guerra Mundial. Anna va todos los días a visitar la tumba de su prometido Frantz, asesinado en Francia. Un día, Adrien, un misterioso joven francés, también deja flores en la tumba. Su presencia suscitará reacciones imprevisibles en un entorno marcado por la derrota de Alemania…",
        created_at: "2017-02-04 18:53:51",
        updated_at: "2018-02-05 17:30:16"
    },
    {
        id: "717",
        title: "Twin Peaks: Fire Walk with Me",
        year: "1992",
        director: "David Lynch",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51H3%2BoFkGxL.jpg",
        rented: "0",
        synopsis: "Precuela de la famosa serie televisiva Twin Peaks",
        created_at: "2018-01-29 15:04:01",
        updated_at: "2019-01-30 22:03:53"
    },
    {
        id: "720",
        title: "Dreamcatcher",
        year: "2003",
        director: "Lawrence Kasdan",
        poster: "https://m.media-amazon.com/images/M/MV5BMTk1MjQwMTQyMV5BMl5BanBnXkFtZTcwODcxMjEzMw@@._V1_SX300.jpg",
        rented: "0",
        synopsis: "Four childhood friends, Jonesy, Beaver, Pete and Henry all share a special secret. Each year, they take a trip into Maine woods. This year is different. A blizzard occurs, and they recover a man found wandering around. Unbeknownst to them,this wandering individual isn't the only being to be found. Now they must act fast to stop the outbreak developing and to prevent the world from its doom",
        created_at: "2019-01-06 11:34:26",
        updated_at: "2019-01-06 11:38:17"
    },
    {
        id: "721",
        title: "Chasing Amy 2",
        year: "1997",
        director: "Kevin Smith",
        poster: "https://m.media-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        rented: "0",
        synopsis: "A pair of comic book authors named Holden McNeil and Banky Edwards, who live in New Jersey, have been best friends for 20 years. They spend their time working in their studio, and in the evenings they are going out. But their friendship is about to be disputed for the first time in their life, when a beautiful young lesbian woman named Alyssa Jones enters their life and Holden falls in love with her. Now Holden has to deal with Banky's jealousy, and with his new girlfriend's very rich past.",
        created_at: "2019-01-06 11:38:59",
        updated_at: "2019-02-12 16:22:37"
    },
    {
        id: "874",
        title: "The Goonies 2",
        year: "1985",
        director: "Richard Donner",
        poster: "https://m.media-amazon.com/images/M/MV5BNGViMjJjNTUtY2IzNi00YzcyLWFjODUtMjc0NTI3YWNhNjgzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        rented: "1",
        synopsis: "Mikey Walsh and Brandon Walsh are brothers whose family is preparing to move because developers want to build a golf course in the place of their neighborhood -- unless enough money is raised to stop the construction of the golf course, and that's quite doubtful. But when Mikey stumbles upon a treasure map of the famed \"One-Eyed\" Willy's hidden fortune, Mikey, Brandon, and their friends Lawrence \"Chunk\" Cohen, Clark \"Mouth\" Devereaux, Andrea \"Andy\" Carmichael, Stefanie \"Stef\" Steinbrenner, and Richard \"Data\" Wang, calling themselves The Goonies, set out on a quest to find the treasure in hopes of saving their neighborhood. The treasure is in a cavern, but the entrance to the cavern is under the restaurant of evil thief Mama Fratelli and her sons Jake Fratelli, Francis Fratelli, and the severely disfigured Lotney \"Sloth\" Fratelli. Sloth befriends the Goonies and decides to help them.",
        created_at: "2019-01-22 16:45:14",
        updated_at: "2019-02-14 17:32:35"
    },
    {
        id: "877",
        title: "Avengers: Age of Ultron",
        year: "2015",
        director: "Joss Whedon",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        rented: "0",
        synopsis: "Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.",
        created_at: "2019-01-22 16:50:18",
        updated_at: "2019-02-14 17:34:01"
    }
];
