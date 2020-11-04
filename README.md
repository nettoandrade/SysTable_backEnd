# SysTable_backEnd
Sistema de Controle de Mesas para estabelecimentos


Roda as Migration

yarn sequelize db:migrate

Desfaz a Ultima Migration
yarn sequelize db:migrate:undo

Desfaz todas as Migrations
yarn sequelize db:migrate:undo:all

Por fim realizar a execução dos Seeds
 yarn sequelize db:seed:all