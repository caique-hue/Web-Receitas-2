module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'Usuarios',
      [
        {
          id: 1,
          nome: 'Delivery App Admin',
          email: 'adm@deliveryapp.com',
          password: 'a4c86edecc5aee06eff8fdeda69e0d04'
        },
        {
          id: 2,
          nome: 'Fulana Pereira',
          email: 'fulana@deliveryapp.com',
          password: '3c28d2b0881bf46457a853e0b07531c6'
        },
        {
          id: 3,
          nome: 'Zé Birita',
          email: 'zebirita@email.com',
          password: '1c37466c159755ce1fa181bd247cb925'
        }
      ],
      { timestamps: false }
    )
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {})
  }
}
