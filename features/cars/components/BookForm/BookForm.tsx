'use client';

import { useState } from 'react';

import Button from '@/components/ui/Button/Button';

export default function BookForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError('Please fill in the required fields: Name and Email.');
      return;
    }

    setError('');

    alert('Car booked successfully!');
    setForm({
      name: '',
      email: '',
      date: '',
      comment: '',
    });
  };

  return (
    <div className="flex flex-col gap-[24px] p-[32px] border border-[var(--gray-light)] rounded-[10px]">
      <div className="flex flex-col gap-[8px]">
        <h3>Book your car now</h3>
        <p className="font-[500]">
          Stay connected! We are always ready to help you.
        </p>
      </div>

      {error && (
        <p className='text-[#FF5733] font-[500]'>{error}</p>
      )}

      <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit}>
        <input
          value={form.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name*"
          className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)]"
        />
        <input
          value={form.email}
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email*"
          className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)]"
        />
        <input
          value={form.date}
          onChange={handleChange}
          name="date"
          type="text"
          placeholder="Booking date"
          className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)]"
        />
        <textarea
          value={form.comment}
          onChange={handleChange}
          name="comment"
          id="comment"
          placeholder="Comment"
          className="!text-[var(--gray)] text-left w-full max-w-full h-[88px] py-[14px] px-[20px] bg-[var(--inputs)] border border-transparent rounded-[12px] placeholder:text-[var(--gray)] resize-none"
        ></textarea>

        <Button
          type="submit"
          className="max-w-[156px] mx-auto mt-[8px]"
          text="Send"
        />
      </form>
    </div>
  );
}
