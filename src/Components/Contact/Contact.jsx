import React from 'react';

const Contact = () => {
    return (
        <div className='text-center'>
            <h3 className='text-3xl mb-6 font-bold'>Contact Us</h3>
            <p className='mb-4'><span className='text-lg font-medium'>Email Address:</span> contact@example.com</p>
            <p className='mb-4'><span className='text-lg font-medium'>Phone Number:</span> 123-456-7890</p>
            <p className='mb-4'><span className='text-lg font-medium'>Physical Address:</span> 123 Fake Street, Fictionville, FS 12345</p>
            <p className='mb-4'><span className='text-lg font-medium'>Social Media Links:</span>
                Facebook: https://www.facebook.com/examplebookstore <br />
                Twitter: https://twitter.com/examplebookstore <br />
                Instagram: https://www.instagram.com/examplebookstore</p>
        </div>
    );
};

export default Contact;