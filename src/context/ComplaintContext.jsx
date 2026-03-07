import React, { createContext, useState, useEffect } from 'react';

export const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
    const [complaints, setComplaints] = useState([
        { id: 101, student: 'John Doe', title: 'Wi-Fi keeps disconnecting', category: 'Infrastructure', issue: 'Wi-Fi keeps disconnecting in the main library on the 2nd floor.', date: new Date().toISOString().split('T')[0], status: 'Pending' }
    ]);

    const addComplaint = (newComplaint) => {
        const complaint = {
            ...newComplaint,
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            status: 'Pending'
        };
        setComplaints([...complaints, complaint]);
    };

    const updateComplaintStatus = (id, newStatus) => {
        setComplaints(complaints.map(c =>
            c.id === id ? { ...c, status: newStatus } : c
        ));
    };

    return (
        <ComplaintContext.Provider value={{ complaints, addComplaint, updateComplaintStatus }}>
            {children}
        </ComplaintContext.Provider>
    );
};
