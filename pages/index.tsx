// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import TeacherCard from '../components/TeacherCard';
import { Teacher } from '../types/teacher';

const dummyTeachers: Teacher[] = [
  { id: '1', name: 'Alice Johnson', subject: 'Math', salaryDue: true },
  { id: '2', name: 'Bob Smith', subject: 'Science', salaryDue: false },
];

const HomePage: React.FC = () => (
  <Layout>
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {dummyTeachers.map((t) => (
        <TeacherCard key={t.id} teacher={t} />
      ))}
    </div>
  </Layout>
);

export default HomePage;
