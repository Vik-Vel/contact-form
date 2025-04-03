// Import Zod for schema creation and validation
import { z } from 'zod'

// Export the schema to use in the form
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
    subject: z.enum(['Website', 'HybridApp', 'Online shop'], {
      errorMap: () => ({ message: 'Subject is required' }),
    }),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  })