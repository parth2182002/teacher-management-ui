interface TeacherProps {
  name: string;
  subject: string;
  salaryDue: boolean;
  imageUrl: string;
}

const TeacherCard: React.FC<TeacherProps> = ({ name, subject, salaryDue, imageUrl }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
    <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />
    <div>
      <h2 className="font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{subject}</p>
      {salaryDue && <span className="text-red-500 text-xs">Salary Due</span>}
    </div>
  </div>
);
