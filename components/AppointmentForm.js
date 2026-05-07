'use client';

import { useMemo, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { clinicInfo } from '@/data/siteData';

const initialState = {
  name: '',
  phone: '',
  date: '',
  time: '',
  department: ''
};

export default function AppointmentForm({ compact = false }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) nextErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.date) nextErrors.date = 'Choose an appointment date';
    if (!form.time) nextErrors.time = 'Choose an appointment time';
    if (!form.department) nextErrors.department = 'Select a department';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(false);
    setSubmitError('');

    if (!validate()) return;

    setLoading(true);
    const { error } = await supabase.from('appointments').insert({
      full_name:      form.name.trim(),
      phone:          form.phone.trim(),
      department:     form.department,
      preferred_date: form.date,
      preferred_time: form.time,
      status:         'pending'
    });
    setLoading(false);

    if (error) {
      setSubmitError('Something went wrong. Please try WhatsApp or call us.');
    } else {
      setSuccess(true);
      setForm(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-4 sm:space-y-5 p-4 sm:p-6 lg:p-8">
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-lg sm:rounded-xl border border-sky-100 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none transition focus:border-teal-500"
            placeholder="Enter your name"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-lg sm:rounded-xl border border-sky-100 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none transition focus:border-teal-500"
            placeholder="98765 43210"
          />
        </Field>
        <Field label="Preferred Date" error={errors.date}>
          <input
            type="date"
            min={minDate}
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
            className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm outline-none transition focus:border-teal-500"
          />
        </Field>
        <Field label="Preferred Time" error={errors.time}>
          <input
            type="time"
            value={form.time}
            onChange={(event) => setForm({ ...form, time: event.target.value })}
            className="w-full rounded-lg sm:rounded-xl border border-sky-100 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none transition focus:border-teal-500"
          />
        </Field>
      </div>

      <Field label="Department" error={errors.department}>
        <select
          value={form.department}
          onChange={(event) => setForm({ ...form, department: event.target.value })}
          className="w-full rounded-lg sm:rounded-xl border border-sky-100 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none transition focus:border-teal-500"
        >
          <option value="">Select Department</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>General Medicine</option>
          <option>Orthopaedics</option>
          <option>Paediatrics</option>
          <option>ENT</option>
        </select>
      </Field>

      <div className={`flex flex-col gap-2 sm:gap-3 ${compact ? '' : 'sm:flex-row'}`}>
        <button
          className="rounded-lg sm:rounded-full bg-slate-900 px-5 sm:px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Submitting…' : 'Confirm Appointment'}
        </button>
        <a
          className="rounded-lg sm:rounded-full border border-teal-200 px-5 sm:px-6 py-3 text-center text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
          href={clinicInfo.whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Book via WhatsApp
        </a>
      </div>

      {success ? <p className="text-sm font-medium text-teal-700">Thanks! Your request is submitted. Our care team will call you shortly.</p> : null}
      {submitError ? <p className="text-sm font-medium text-rose-600">{submitError}</p> : null}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}
