import { useState } from 'react';

export default function TaskCard({ task, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleSave = () => {
        onEdit(task.id, newTitle);
        setIsEditing(false);
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '16px', 
            margin: '12px 0', 
            backgroundColor: '#ffffff', 
            borderLeft: '6px solid #87CEFA', // Sky Blue
            borderRadius: '12px', 
            boxShadow: '0 4px 12px rgba(135, 206, 250, 0.2)' 
        }}>
            {isEditing ? (
                <input 
                    value={newTitle} 
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{ padding: '8px', width: '60%', borderRadius: '6px', border: '1px solid #87CEFA' }}
                />
            ) : (
                <span style={{ fontWeight: '600', color: '#2F4F4F' }}>{task.title}</span>
            )}
            
            <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                    onClick={isEditing ? handleSave : () => setIsEditing(true)} 
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', backgroundColor: '#E0F7FA', color: '#007ACC', cursor: 'pointer', fontWeight: 'bold' }}>
                    {isEditing ? 'Simpan' : 'Edit'}
                </button>
                <button 
                    onClick={onDelete} 
                    style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', backgroundColor: '#FFEBEE', color: '#D32F2F', cursor: 'pointer', fontWeight: 'bold' }}>
                    Hapus
                </button>
            </div>
        </div>
    );
}