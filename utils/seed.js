const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const seedUser = require('./user-seeds');
const seedThoughts = require('./thought-seeds');
const seedReactions = require('./reaction-seeds');

console.time('seeding');

connection.on('error', (err) => {
  console.error('MongoDB Connection Error: ' + err);
});

connection.once('open', async () => {
  console.log('Connected to MongoDB');
  try {
    console.log('Deleting existing data...');
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});
    console.log('Data successfully deleted...');

    const userData = await seedUser();
    console.log('Users seeded...')
    console.log('-------------------------')
    console.log('User Data: ', userData)
    const thoughtData = await seedThoughts();
    console.log('Thoughts seeded...')
    console.log('-------------------------')
    console.log('Thought Data: ', thoughtData)
    const reactionData = await seedReactions();
    console.log('Reactions seeded...')
    console.log('-------------------------')
    console.log('Reaction Data: ', reactionData)
    console.log('Data seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    console.timeEnd('seeding');
    connection.close();
  }
});