import { useEffect, useState } from "react";

export default function Footer() {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const date = new Date().getFullYear();
        setFormattedDate(date.toString()); // Convert to string if necessary
    }, []);

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                {/* Copyright */}
                <p className="text-lg text-gray-400">
                    &copy; {formattedDate}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
