// components/PaymentForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Teacher } from '../types/teacher';

const paymentSchema = z.object({
  teacherId: z.string().min(1, 'Select a teacher'),
  amount: z.number().positive('Must be positive'),
  date: z.string().min(1, 'Enter a date'),
  notes: z.string().optional(),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

export const PaymentForm: React.FC<{ teachers: Teacher[] }> = ({ teachers }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: PaymentFormData) => {
    console.log('Submit:', data);
    return new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow space-y-4"
    >
      <div>
        <label>Teacher</label>
        <select {...register('teacherId')} className="w-full border rounded p-2">
          <option value="">Select...</option>
          {teachers.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        {errors.teacherId && <p className="text-red-500 text-sm">{errors.teacherId.message}</p>}
      </div>

      <div>
        <label>Amount (₹)</label>
        <input
          type="number"
          step="0.01"
          {...register('amount', { valueAsNumber: true })}
          className="w-full border rounded p-2"
        />
        {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
      </div>

      <div>
        <label>Date</label>
        <input type="date" {...register('date')} className="w-full border rounded p-2" />
        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
      </div>

      <div>
        <label>Notes</label>
        <textarea {...register('notes')} className="w-full border rounded p-2" rows={3} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        {isSubmitting ? 'Processing...' : 'Submit Payment'}
      </button>

      {isSubmitSuccessful && <p className="text-green-600">Payment Successful!</p>}
    </form>
  );
};
