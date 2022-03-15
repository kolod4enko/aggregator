export const MESSAGES = {
  ERRORS: {
    required: {
      field: 'обязательное поле',
    },
    format: {
      base: 'Некорректный формат поля',
      file: 'Unsupported file type',
      id: 'Некорректный формат ID',
    },
    min: (field: string, value: number) => `Поле ${field} не может быть меньше ${value}`,
    max: (field: string, value: number) => `Поле ${field} не может быть больше ${value}`,
    validateIfOne: (first: string, second: string) =>
      `Если поле ${first} заполнено, то и поле ${second} должно быть заполнено`,
  },
  RESPONSE: {
    CREATE_SUCCESS: 'Successful record creation',
    UPDATE_SUCCESS: 'Successful record update',
    DELETE_SUCCESS: 'Successful record deletion',
    CREATE_ERROR: 'An error occurred while creating a record',
    UPDATE_ERROR: 'An error occurred while updating the record',
    DELETE_ERROR: 'An error occurred when deleting a record',
  },
};
