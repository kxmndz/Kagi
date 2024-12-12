const Book = require("./models/Book");
const Author = require("./models/Author");

const users = new Map();
users.set("admin", {
    type: 'admin',
    id: 1,
    username: 'admin',
    password: 'admin123'
});
users.set("kxmndz", {
    type: 'admin',
    id: 2,
    username: 'kxmndz',
    password: 'lalalala',
    email: 'kxmndz@gmail.com',
    name: 'Kyran Mendoza',
    birthdate: '2005-08-08',
    phone: '09565515938'
});
users.set("client", {
    type: 'user',
    id: 3,
    username: 'client',
    password: 'lalala',
    email: 'client@gmail.com',
    name: 'Test Client',
    birthdate: '2005-08-08',
    phone: '09565515938'
});

const books = new Map();
books.set(
    "123456",
    new Book(123456,
        "Ki ni Natteru Hito ga Otoko Janakatta",
        "The Guy She Was Interested In Wasn't A Guy At All!",
        12001,
        '2023-4-13',
        "Completed",
        "12-18",
        "Fashionable and upbeat high schooler Aya falls head over heels for an employee at a local CD shop. He’s got an air of mystery about him, always dressed well, and has impeccable taste in music. Little does she know — this supposedly male employee is actually her female classmate Mitsuki!\n\nMitsuki generally keeps to herself, but since her seat is right next to Aya’s, she can't help but be extremely aware of the other’s crush. Revealing the truth is out of the question — but perhaps getting closer to Aya wouldn’t be so bad..."
    )
);
books.set(
    "123457",
    new Book(123457,
        "Akame ga Kiru!",
        "Akame ga Kill!",
        12002,
        '2010-03-20',
        "Completed",
        "12-18",
        "Tatsumi is a fighter who-accompanied by his two childhood friends-sets off to the Capital in search of a way to make money to assist his poverty-stricken village. After being separated from his friends-Tatsumi not only fails to enlist in the army-but is swindled out of all his money. He is then taken in by a noble family who offer him help; after finding himself in a messy situation Tatsumi is rescued by a group of assassins known as Night Raid-and is invited to join their ranks. Composed of the swordswoman Akame-a young woman armed with a huge pair of scissors named Sheele-the string manipulator Lubbock-the armored warrior Bulat-the sniper Mine-the beast fighter Leone and their leader Najenda-Night Raid is also part of the revolutionary forces assembled to overthrow Prime Minister Honest-who manipulates the young emperor for his and his men's personal gain-leading the rest of the nation to poverty and strife."
    )
);
books.set(
    "123459",
    new Book(123459,
        "Sousou no Frieren",
        "Frieren: Beyond Journey's End",
        12004,
        '2022-03-17',
        "Ongoing",
        "13+",
        "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. With the great struggle over, they all go their separate ways to live a quiet life. But as an elf, Frieren, nearly immortal, will long outlive the rest of her former party. How will she come to terms with the mortality of her friends? How can she find fulfillment in her own life, and can she learn to understand what life means to the humans around her? Frieren begins a new journey to find the answer."
    )
);
books.set(
    "123461",
    new Book(
        123461,
        "ぼっち博士とロボット少女の絶望的ユートピア",
        "Lonely Professor and Robot Girl's Despair-Like Utopia",
        12004,
        '2020-09-25',
        'Completed',
        '13+',
        'Follows the daily life of a professor and a robot girl in a post-apocalyptic setting.'
    )
);


const rentals = new Map();
rentals.set('3', [
    {bookId: 123459, dueDate: '2024-12-25'},
    {bookId: 123461, dueDate: '2024-12-25'}
]);

const authors = new Map();
authors.set('12001', new Author(12001, 'Yukihara'));
authors.set('12002', new Author(12002, 'Takahiro'));
authors.set('12004', new Author(12004, 'Kanehito Yamada'));

module.exports = {
    books, users, rentals, authors
}