import { Request } from 'express';
import { existsSync, mkdirSync } from 'fs';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';
import { BadRequestException } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

import { Errors } from '@helpers/errors';

type IFileFilterCallback = (error: Error | null, acceptFile: boolean) => void;
type IDestinationCallback = (error: Error | null, destination: string) => void;
type IFilenameCallback = (error: Error | null, filename: string) => void;

const IMAGE_MAX_FILE_SIZE = 3 * 1024 * 1024;

export const multerConfigImage: MulterOptions = {
  dest: process.env.UPLOADED_FILES_PATH,
  limits: { fileSize: IMAGE_MAX_FILE_SIZE },
  fileFilter: (req: Request, file: Express.Multer.File, cb: IFileFilterCallback) => {
    const regex = /\/(jpg|jpeg|png|svg\+xml)$/;
    const isValidFile = !!file.mimetype.match(regex);
    const errorMsg = Errors.badFormatFile(extname(file.originalname));
    const error = !isValidFile ? new BadRequestException(errorMsg) : null;

    cb(error, isValidFile);
  },
  storage: diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: IDestinationCallback) => {
      const uploadPath = multerConfigImage.dest;

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }

      cb(null, uploadPath);
    },
    filename: (req: Request, file: Express.Multer.File, cb: IFilenameCallback) => {
      cb(null, `${uuid()}${extname(file.originalname)}`);
    },
  }),
};

export const clinicFileInterceptor = FileFieldsInterceptor(
  [{ name: 'photos', maxCount: 10 }, { name: 'licenses' }],
  multerConfigImage,
);

const unlink = (path: string) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

export const deleteFiles = async (fileNames: string[]) => {
  const folder = process.env.UPLOADED_FILES_PATH;

  return Promise.all(
    fileNames.map((fileName) => {
      new Promise(() => unlink(`${folder}/${fileName}`));
    }),
  );
};
