import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import { Invoice, CreateInvoiceInput } from '../schemas/invoice';
import { InvoiceService } from '../../database/service/invoiceService';

@Service()
@Resolver((of) => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Query((returns) => [Invoice], { nullable: true })
  async getInvoices(): Promise<Invoice[]> {
    return await this.invoiceService.getAll();
  }

  @Query((returns) => Invoice, { nullable: true })
  async getInvoice(@Arg('id') id: number): Promise<Invoice | undefined> {
    return await this.invoiceService.getOne(id);
  }

  @Mutation((returns) => Invoice)
  async addInvoice(
    @Arg('InvoiceInput') createInvoiceInput: CreateInvoiceInput,
  ): Promise<Invoice> {
    return await this.invoiceService.create(createInvoiceInput);
  }

//   @Mutation((returns) => Invoice)
//   async updateMovie(
//     @Arg('id') id: number,
//     @Arg('MovieInput') updateMovieInput: UpdateMovieInput,
//   ): Promise<Movie> {
//     return await this.movieService.update(id, updateMovieInput);
//   }

//   @Mutation((returns) => Boolean)
//   async deleteMovie(@Arg('id') id: number): Promise<boolean> {
//     return await this.invoiceService.delete(id);
//   }
}