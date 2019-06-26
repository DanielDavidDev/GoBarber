module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // tabela para a mudança
      'avatar_id', // nome da coluna e abaixo suas propriedades
      {
        type: Sequelize.INTEGER, // tipo do dado
        references: { model: 'files', key: 'id' }, // referencia
        onUpdate: 'CASCADE', // fazer com o que a alteração ocorra
        onDelete: 'SET NULL', // se for deletado seta para null
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
