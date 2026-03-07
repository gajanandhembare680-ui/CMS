import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoute = ({ children, allowedRole }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setIsAuthenticated(true);

                try {
                    // Note: Sign-up currently saves to "user" collection with field "role"
                    const userDoc = await getDoc(doc(db, "user", user.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        if (userData.role === allowedRole) {
                            setIsAuthorized(true);
                        } else {
                            setIsAuthorized(false);
                        }
                    } else {
                        // Edge case if user document doesn't exist
                        setIsAuthorized(false);
                    }
                } catch (error) {
                    console.error("Error fetching user role:", error);
                    setIsAuthorized(false);
                }
            } else {
                setIsAuthenticated(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [allowedRole]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <p>Loading...</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/role-selection" />;
    }

    if (!isAuthorized) {
        // Redirect somewhere if they don't have the right role
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
