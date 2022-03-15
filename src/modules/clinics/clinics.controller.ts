import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { STATUS } from '@constants/statuses';
import { clinicFileInterceptor } from '@helpers/files';

import { DOC } from './clinics.constants';
import { ClinicResponse, CreateClinicDto } from './clinics.dto';
import { IClinic, ICreateClinicFiles } from './clinics.interfaces';
import { ClinicsService } from './clinics.service';

@ApiTags('clinics-controller')
@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Post('create')
  @UseInterceptors(clinicFileInterceptor)
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: DOC.CONTROLLERS.CREATE })
  @ApiResponse({ ...STATUS['201'], type: ClinicResponse })
  @ApiResponse(STATUS['400'])
  @ApiResponse(STATUS['500'])
  async create(
    @Body() data: CreateClinicDto,
    @UploadedFiles() files: ICreateClinicFiles,
  ): Promise<IClinic> {
    return this.clinicsService.create(data, files);
  }

  @Put('update/:id')
  @HttpCode(201)
  @UseInterceptors(clinicFileInterceptor)
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: DOC.CONTROLLERS.UPDATE })
  @ApiResponse({ ...STATUS['201'], type: ClinicResponse })
  @ApiResponse(STATUS['400'])
  @ApiResponse(STATUS['500'])
  async update(
    @Param('id') id: string,
    @Body() data: CreateClinicDto,
    @UploadedFiles() files: ICreateClinicFiles,
  ): Promise<IClinic> {
    return this.clinicsService.update(id, data, files);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: DOC.CONTROLLERS.DELETE })
  @ApiResponse({ ...STATUS['200'], type: ClinicResponse })
  @ApiResponse(STATUS['400'])
  @ApiResponse(STATUS['500'])
  async delete(@Param('id') id: string) {
    await this.clinicsService.delete(id);
  }
}
