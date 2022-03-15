import { isEmpty } from 'lodash';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { deleteFiles } from '@helpers/files';
import { Clinics, ClinicsDocument } from '@db/schemas/clinics.schema';

import { IClinic, ICreateClinic, ICreateClinicFiles } from './clinics.interfaces';

@Injectable()
export class ClinicsService {
  constructor(@InjectModel(Clinics.name) private readonly clinicsModel: Model<ClinicsDocument>) {}

  async create(data: ICreateClinic, files: ICreateClinicFiles): Promise<IClinic> {
    const photos = files.photos.map(({ filename }) => filename);
    const licenses = files.licenses?.map(({ filename }) => filename) || [];

    return this.clinicsModel.create({ ...data, photos, licenses });
  }

  async update(id: string, data: ICreateClinic, files: ICreateClinicFiles) {
    const photos = files.photos.map(({ filename }) => filename);
    const licenses = files.licenses?.map(({ filename }) => filename) || [];
    const element = await this.clinicsModel.findOne({ _id: id }).exec();

    return element.updateOne({ ...data, photos, licenses }).then((el) => {
      if (!isEmpty(photos)) {
        deleteFiles(element.photos);
      }

      if (!isEmpty(licenses)) {
        deleteFiles(element.licenses);
      }

      return el;
    });
  }

  async delete(id: string) {
    const element = await this.clinicsModel.findOne({ _id: id }).exec();

    if (element) {
      element.deleteOne().then((el) => {
        const { photos, licenses } = el;

        deleteFiles([...photos, ...licenses]);
      });
    }
  }
}
