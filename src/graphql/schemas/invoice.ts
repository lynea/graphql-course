import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class Invoice {
  @Field()
  vat: number;

  @Field()
  subTotal: number;

  @Field()
  total: number;

  @Field()
  createdAt: Date;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}

@InputType()
export class CreateInvoiceInput implements Partial<Invoice> {
 @Field()
  vat: number;

  @Field()
  subTotal: number;

  @Field()
  total: number;

  @Field()
  createdAt: Date;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;
}

// @InputType()
// export class UpdateMovieInput implements Partial<Movie> {
//   @Field({ nullable: true })
//   @Length(2, 50)
//   title?: string;

//   @Field({ nullable: true })
//   @Length(10, 250)
//   description?: string;

//   @Field((type) => [String], { nullable: true })
//   actors?: string[];

//   @Field({ nullable: true })
//   releaseYear?: string;
// }