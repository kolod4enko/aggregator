import { Clinics } from '@db/schemas/clinics.schema';

import { CreateClinicDto } from './clinics.dto';

export type ICreateClinic = CreateClinicDto;
export type IClinic = Clinics;
export interface ICreateClinicFiles {
  photos: Express.Multer.File[];
  licenses?: Express.Multer.File[];
}
