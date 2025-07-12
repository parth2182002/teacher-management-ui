// pages/payments.tsx
import React from 'react';
import Layout from '../components/Layout';
import { PaymentForm } from '../components/PaymentForm';
import { Teacher } from '../types/teacher';

const dummyTeachers: Teacher[] = [
  { id: '1', name: 'Alice Johnson', subject: 'Math', salaryDue: true },
  { id: '2', name: 'Bob Smith', subject: 'Science', salaryDue: false },
];

const PaymentsPage: React.FC = () => (
  <Layout>
    <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
    <PaymentForm teachers={dummyTeachers} />
  </Layout>
);

export default PaymentsPage;
