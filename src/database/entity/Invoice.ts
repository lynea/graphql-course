import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  total: number;

  @Column()
  vat: number;

  @Column()
  subTotal: number;

  @CreateDateColumn({ name: 'end_date' })
  endDate: Date;

  @CreateDateColumn({ name: 'start_date' })
  startDate: Date;

  @UpdateDateColumn({ name: 'created_at' })
  createdAt: Date;
}