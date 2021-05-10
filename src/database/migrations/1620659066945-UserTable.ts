import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1620659066945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
        CREATE TABLE users (
          id SERIAL,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL, 
          password VARCHAR(20) NOT NULL,
          CONSTRAINT unique_users_email UNIQUE (email),
          CONSTRAINT pk_users_id PRIMARY KEY (id)
        );
      `
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');

    }

}
