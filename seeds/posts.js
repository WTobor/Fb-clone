const mongoose = require('mongoose');
const faker = require('faker');

const connectionString = 'mongodb://localhost';

const postSchema = new mongoose.Schema({
    id: String,
    body: String,
    created_time: Date
});

const Post = mongoose.model('Post', postSchema);

async function bootstrap() {
    const connection = await mongoose.connect(connectionString, {useNewUrlParser: true, dbName: 'posts'});

    await Post.deleteMany({});

    const size = 10;
    for(let x of Array.from({length: size})) {
        const post = new Post({
            id: faker.random.uuid(),
            created_time: faker.date.past(),
            body: faker.lorem.text(),
        })
        await post.save();
    }


    await connection.disconnect();
}

bootstrap()
    .catch((err) => console.error(err));