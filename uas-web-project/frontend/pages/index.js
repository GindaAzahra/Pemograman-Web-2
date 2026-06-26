import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import TaskCard from '../components/TaskCard';

const BACKEND_URL = 'http://localhost:5000/api/tasks';

export default function Home() {
  const queryClient = useQueryClient();
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    document.title = "UAS Web - Task Hub";
  }, []);

  // 1. Fetch data
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await axios.get(BACKEND_URL);
      return response.data;
    }
  });

  // 2. Tambah tugas
  const addTaskMutation = useMutation({
    mutationFn: (title) => axios.post(BACKEND_URL, { title }),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
      setTaskTitle('');
    }
  });

  // 3. Hapus tugas
  const deleteTaskMutation = useMutation({
    mutationFn: (id) => axios.delete(`${BACKEND_URL}/${id}`),
    onSuccess: () => queryClient.invalidateQueries(['tasks'])
  });

  // 4. Edit tugas
  const editTaskMutation = useMutation({
    mutationFn: ({ id, title }) => axios.put(`${BACKEND_URL}/${id}`, { title }),
    onSuccess: () => queryClient.invalidateQueries(['tasks'])
  });

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '600px', 
      margin: '0 auto', 
      minHeight: '100vh', 
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#F0F8FF' // Soft AliceBlue background
    }}>
      <h1 style={{ color: '#4682B4', textAlign: 'center' }}>Aplikasi Task Hub</h1>
      
      <nav style={{ marginBottom: '30px', textAlign: 'center' }}>
        <Link href="/about" style={{ color: '#4682B4', textDecoration: 'none', fontWeight: 'bold' }}>
          Lihat Profil Pembuat
        </Link>
      </nav>

      <form 
        onSubmit={(e) => { e.preventDefault(); addTaskMutation.mutate(taskTitle); }} 
        style={{ marginBottom: '30px', display: 'flex', gap: '10px' }}
      >
        <input 
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
          placeholder="Tulis tugas baru di sini..." 
          style={{ 
            padding: '12px', 
            flex: 1, 
            borderRadius: '8px', 
            border: '2px solid #87CEFA',
            outline: 'none'
          }} 
        />
        <button type="submit" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#4682B4', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>Tambah</button>
      </form>

      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Sedang memuat data...</p>
      ) : (
        tasks?.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onDelete={() => deleteTaskMutation.mutate(task.id)}
            onEdit={(id, title) => editTaskMutation.mutate({ id, title })}
          />
        ))
      )}
    </div>
  );
}