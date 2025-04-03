import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const CardBody: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="relative">
            {/* Background card */}
            <div className="absolute inset-0 scale-x-90 -rotate-[5deg] bg-black rounded-lg"></div>
            {/* Foreground card */}
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 p-4 shadow-lg rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default CardBody;