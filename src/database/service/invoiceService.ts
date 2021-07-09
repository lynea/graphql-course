import { Service } from 'typedi';
import { Invoice } from '../entity/Invoice';
import { CreateInvoiceInput } from '../../graphql/schemas/invoice';

@Service()
export class InvoiceService {
  getAll = async (): Promise<Invoice[]> => {
    return await Invoice.find();
  };

  getOne = async (id: number): Promise<Invoice | undefined> => {
    const invoice = await Invoice.findOne({ where: { id } });

    if (!Invoice) {
      throw new Error(`The Invoice with id: ${id} does not exist!`);
    }
    return invoice;
  };

  create = async (createInvoiceInput: CreateInvoiceInput): Promise<Invoice> => {
    return await Invoice.create(createInvoiceInput).save();
  };

  // update = async (
  //   id: number,
  //   updateInvoiceInput: UpdateInvoiceInput,
  // ): Promise<Invoice> => {
  //   const InvoiceFound = await Invoice.findOne({ where: { id } });

  //   if (!InvoiceFound) {
  //     throw new Error(`The Invoice with id: ${id} does not exist!`);
  //   }

  //   Object.assign(InvoiceFound, updateInvoiceInput);
  //   const updatedInvoice = await movieFound.save();

  //   return updatedMovie;
  // };

  delete = async (id: number): Promise<boolean> => {
    const movieFound = await Invoice.findOne({ where: { id } });

    if (!movieFound) {
      throw new Error(`The movie with id: ${id} does not exist!`);
    }

    await movieFound.remove();

    return true;
  };
}