import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EfooterS from '../../Elements/EfooterS';

import '../../assets/StyleSheets/Presence.css';

const students = [
    { id: 1, name: 'אור', imgSrc: '/path/to/image1.jpg' },
    { id: 2, name: 'ליאת', imgSrc: '/path/to/image2.jpg' },
    { id: 3, name: 'גפן', imgSrc: '/path/to/image3.jpg' },
    { id: 4, name: 'עומר', imgSrc: '/path/to/image4.jpg' },
    { id: 5, name: 'אביב', imgSrc: '/path/to/image5.jpg' },
    { id: 6, name: 'אביהו', imgSrc: '/path/to/image6.jpg' },
    { id: 7, name: 'אלון', imgSrc: '/path/to/image7.jpg' },
    { id: 8, name: 'טל.נ', imgSrc: '/path/to/image8.jpg' },
    { id: 9, name: 'טל.ג', imgSrc: '/path/to/image9.jpg' },
    { id: 10, name: 'טניה', imgSrc: '/path/to/image10.jpg' },
    { id: 11, name: 'כינרת', imgSrc: '/path/to/image11.jpg' },
    { id: 12, name: 'תום', imgSrc: '/path/to/image12.jpg' },
];

export default function Presence() {
    const [presence, setPresence] = useState(students.map(student => ({ ...student, present: false })));

    const togglePresence = (id) => {
        setPresence(prevPresence =>
            prevPresence.map(student =>
                student.id === id ? { ...student, present: !student.present } : student
            )
        );
    };

    return (
        <>
            <div style={{ backgroundColor: '#2D8B9099', margin: '20px', height: '10vh', borderRadius: '20px', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ fontSize: '48px', textAlign: 'center', color: 'white', margin: '0 auto' }}>נוכחות</h2>
            </div>
            <Container className="presence-container">
                <Box className="header">
                    <Typography variant="h4" component="h1" className="centered-text">
                        נוכחות
                    </Typography>
                    <Box className="search-box">
                        <input type="text" placeholder="חיפוש" className="search-input" />
                        <IconButton className="search-button">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Button>
                        צ'אט עם הורה
                    </Button>
                </Box>
                <Box className="students-grid">
                    {presence.map(student => (
                        <Box
                            key={student.id}
                            className={`student-circle ${student.present ? 'present' : ''}`}
                            onClick={() => togglePresence(student.id)}
                        >
                            <Avatar src={student.imgSrc} alt={student.name} className="student-avatar" />
                            <Typography variant="caption" component="p" className="student-name">
                                {student.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                {EfooterS}
            </Container>
        </>
    );
}
