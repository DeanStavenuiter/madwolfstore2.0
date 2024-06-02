import zod from 'zod';

const envSchema = zod.object({
    DATABASE_URL: zod.string().nonempty(),
    GOOGLE_CLIENT_ID: zod.string().nonempty(),
    GOOGLE_CLIENT_SECRET: zod.string().nonempty(),
    NEXTAUTH_URL: zod.string().nonempty(),
    NEXTAUTH_SECRET: zod.string().nonempty(),
    NODEMAILER_EMAIL: zod.string().nonempty(),
    NODEMAILER_APP_PWD: zod.string().nonempty(),
    MOLLIE_API_KEY: zod.string().nonempty(),
  });
  
  export const env = envSchema.parse(process.env);