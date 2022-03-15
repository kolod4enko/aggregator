import { MESSAGES } from '@constants/messages';

export class Errors {
  static requiredField(fieldName: string) {
    return `${fieldName} ${MESSAGES.ERRORS.required.field}`;
  }

  static badFormatField(filterName: string) {
    return `${MESSAGES.ERRORS.format.base} — ${filterName}`;
  }

  static badFormatFile(fileName: string) {
    return `${MESSAGES.ERRORS.format.file} "${fileName}"`;
  }

  static minValueField(filterName: string, value: number) {
    return MESSAGES.ERRORS.min(filterName, value);
  }

  static maxValueField(filterName: string, value: number) {
    return MESSAGES.ERRORS.max(filterName, value);
  }

  static validateIfOne(first: string, second: string) {
    return MESSAGES.ERRORS.validateIfOne(first, second);
  }
}
