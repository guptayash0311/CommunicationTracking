import React, { useState } from 'react';
import AddCompanyForm from './AddCompanyForm';
import AddCommunicationMethodForm from './AddCommunicationMethodForm';

const AdminPanel = () => {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">ENTNT Admin Panel</h2>
      <div className="space-x-4 mb-2">
        <button
          onClick={() => setActiveForm('company')}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
        >
          Add Company
        </button>
        <button
          onClick={() => setActiveForm('method')}
          className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded text-white"
        >
          Add Communication Method
        </button>
      </div>

      {activeForm === 'company' && <AddCompanyForm />}
      {activeForm === 'method' && <AddCommunicationMethodForm />}
    </div>
  );
};

export default AdminPanel;
