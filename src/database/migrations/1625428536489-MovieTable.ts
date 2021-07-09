import {MigrationInterface, QueryRunner} from "typeorm";

export class MovieTable1625428536489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE IF NOT EXISTS invoice
        (id SERIAL PRIMARY KEY, 
        total FLOAT NOT NULL,  
        vat FLOAT NOT NULL,  
        subTotal FLOAT,
        start_date TIMESTAMP NOT NULL DEFAULT NOW(),
        endDate TIMESTAMP NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW())`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable('invoice');
    }

}


