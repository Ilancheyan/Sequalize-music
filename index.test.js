const {sequelize} = require('./db')
const {Musician} = require('./index')
describe('Muscian Database', () => {
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })
    const arrayOfMusicians=[
        {name: 'kasem', instrument: 'dhool'},
        {name: 'irene',instrument1: 'guitar'},
        {name: 'ilancheyan', instrument2: 'tabla'}
    ]
    test('musicians have name', async() => {
        await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'kasem'
            }
          });
        expect(testMusician.name).toBe('kasem')
    })
    test('musicians have an instrument', async() => {
        await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'irene'
            }
          });
        expect(testMusician.name).toBe('irene')
    })
    test('musicians have an instrument', async() => {
        await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'ilancheyan'
            }
          });
        expect(testMusician.name).toBe('ilancheyan')
    })
})