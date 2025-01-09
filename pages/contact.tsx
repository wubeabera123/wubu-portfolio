import React, { useState } from 'react';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import toast, { Toaster } from 'react-hot-toast';

interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

async function SendContactInfo(data: any) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {
    console.error('Error sending contact info:', error);
    throw error;
  }
}

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validateForm = (): { ok: boolean; errors: ContactFormErrors } => {
    let valid = true;
    const newErrors: ContactFormErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return { ok: valid, errors: newErrors };
  };

  const handleContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateForm();

    if (res.ok) {
      const loadingToast = toast.loading('Sending message...');

      const contactFormData = {
        firstName,
        lastName,
        email,
        message,
      };

      try {
        const response = await SendContactInfo(contactFormData);

        if (response.ok) {
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          setErrors({});

          toast.dismiss(loadingToast);
          toast.success('Message sent successfully!', {
            duration: 5000,
            style: {
              background: '#2D3748',
              color: '#fff',
            },
          });

          console.log('Form submitted successfully');
        } else {
          const errorData = await response.json();
          toast.dismiss(loadingToast);
          toast.error(errorData.message || 'Failed to send message', {
            duration: 5000,
            style: {
              background: '#2D3748',
              color: '#fff',
            },
          });
          console.error('Form submission failed');
        }
      } catch (error) {
        toast.dismiss(loadingToast);
        toast.error('Error submitting form. Please try again.', {
          duration: 5000,
          style: {
            background: '#2D3748',
            color: '#fff',
          },
        });
        console.error('Error submitting form:', error);
      }
    } else {
      toast.error('Please fill in all required fields correctly.', {
        duration: 5000,
        style: {
          background: '#2D3748',
          color: '#fff',
        },
      });
      console.log('Form validation failed', res.errors);
    }
  };

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Toaster position='top-right' />

      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <div className='mt-[20px] w-full md:mt-[30px] lg:mt-[40px] lg:w-[600px]'>
            <h3 className='h3 font-medium'>How can I help?</h3>
            <form
              className='mt-[20px] md:mt-[40px] lg:mt-[40px]'
              onSubmit={handleContactForm}
            >
              <div>
                <input
                  value={firstName}
                  type='text'
                  name='firstName'
                  onChange={e => setFirstName(e.target.value)}
                  placeholder='First Name'
                  className='custom-outline mt-1 h-[50px] w-full rounded border-[1px] border-gray-300 
                    bg-white p-2 dark:border-gray-600 
                    dark:bg-gray-800 dark:text-gray-100'
                />
                {errors.firstName && (
                  <p className='p2 rounded-lg px-2 text-sm text-red-800 dark:text-red-400'>
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className='mt-5'>
                <input
                  value={lastName}
                  className='custom-outline mt-1 h-[50px] w-full rounded border-[1px] border-gray-300 
                    bg-white p-2 dark:border-gray-600 
                    dark:bg-gray-800 dark:text-gray-100'
                  type='text'
                  name='lastName'
                  onChange={e => setLastName(e.target.value)}
                  placeholder='Last Name'
                />
                {errors.lastName && (
                  <p className='p2 rounded-lg px-2 text-sm text-red-800 dark:text-red-400'>
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div className='mt-5'>
                <input
                  value={email}
                  type='text'
                  placeholder='Email Address'
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                  className='custom-outline mt-1 h-[50px] w-full rounded border-[1px] border-gray-300 
                    bg-white p-2 dark:border-gray-600 
                    dark:bg-gray-800 dark:text-gray-100'
                />
                {errors.email && (
                  <p className='p2 rounded-lg px-2 text-sm text-red-800 dark:text-red-400'>
                    {errors.email}
                  </p>
                )}
              </div>
              <div className='mt-5'>
                <textarea
                  value={message}
                  className='custom-outline mt-1 w-full rounded border-[1px] border-gray-300 bg-white 
                    p-2 pb-20 dark:border-gray-600 
                    dark:bg-gray-800 dark:text-gray-100'
                  name='message'
                  placeholder='Message'
                  onChange={e => setMessage(e.target.value)}
                />
                {errors.message && (
                  <p className='p2 rounded-lg px-2 text-sm text-red-800 dark:text-red-400'>
                    {errors.message}
                  </p>
                )}
              </div>
              <div>
                <button
                  type='submit'
                  className=' mt-4 h-[50px] w-full max-w-[176px] rounded bg-[#8f9faf] py-1 px-[20px] font-medium tracking-tight  transition-all duration-500'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
