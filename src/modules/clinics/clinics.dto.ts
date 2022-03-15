import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Errors } from '@helpers/errors';

import { DOC } from './clinics.constants';

class ClinicBase {
  @ApiProperty({ description: DOC.CLINIC.ID })
  _id: string;

  @ApiProperty({ description: DOC.CLINIC.NAME })
  name: string;

  @ApiProperty({ description: DOC.CLINIC.TYPE })
  type: string;

  @ApiProperty({ description: DOC.CLINIC.ADDRESS })
  address: string;

  @ApiProperty({ description: DOC.CLINIC.PHONE })
  phone: number;

  @ApiProperty({ description: DOC.CLINIC.DESCRIPTION })
  description: string;

  @ApiProperty({ description: DOC.CLINIC.RATING })
  rating: number;

  @ApiProperty({ description: DOC.CLINIC.ACTIVE })
  active: boolean;

  @ApiProperty({ description: DOC.CLINIC.PHOTOS })
  photos: string[];

  @ApiProperty({ description: DOC.CLINIC.LICENSES })
  licenses: string[];

  @ApiProperty({ description: DOC.CLINIC.DATE_CREATION })
  createdAt: Date;
}

export class CreateClinicDto {
  @IsNotEmpty({ message: Errors.requiredField('name') })
  @IsString({ message: Errors.badFormatField('name') })
  @ApiProperty({ description: DOC.CLINIC.NAME, default: 'Name of the clinic' })
  name: string;

  @IsNotEmpty({ message: Errors.requiredField('type') })
  @IsString({ message: Errors.badFormatField('type') })
  @ApiProperty({ description: DOC.CLINIC.TYPE, default: 'Type of the clinic' })
  type: string;

  @IsNotEmpty({ message: Errors.requiredField('address') })
  @IsString({ message: Errors.badFormatField('address') })
  @ApiProperty({ description: DOC.CLINIC.ADDRESS, default: 'Address of the clinic' })
  address: string;

  @IsNotEmpty({ message: Errors.requiredField('phone') })
  @IsInt({ message: Errors.badFormatField('phone') })
  @ApiProperty({ description: DOC.CLINIC.PHONE, default: 999999 })
  phone: number;

  @IsNotEmpty({ message: Errors.requiredField('description') })
  @IsString({ message: Errors.badFormatField('description') })
  @ApiProperty({ description: DOC.CLINIC.DESCRIPTION, default: 'Desc of the clinic' })
  description: string;

  @IsNotEmpty({ message: Errors.requiredField('photos') })
  @ApiProperty({
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
  })
  photos: string[];

  @IsOptional()
  @ApiProperty({
    required: false,
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
  })
  licenses: string[];
}

export class ClinicResponse extends ClinicBase {}
