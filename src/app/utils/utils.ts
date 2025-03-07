import { z } from "zod";

const uuidSchema = z.string().uuid();

 const validateUUID = (bookId: string) => {
  try {
    uuidSchema.parse(bookId);
    return true;
  } catch {
    return false;
  }
};

export default validateUUID;