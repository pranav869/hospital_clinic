import Image from 'next/image';

export default function DoctorCard({ doctor }) {
  return (
    <article className="glass-card overflow-hidden">
      <div className="relative h-44 w-full sm:h-56 lg:h-64">
        <Image src={doctor.image} alt={doctor.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
        <p className="text-sm font-medium text-teal-700">{doctor.speciality}</p>
        <p className="text-sm text-slate-600">Experience: {doctor.experience}</p>
        <p className="text-sm text-slate-600">{doctor.qualification}</p>
        <p className="rounded-lg bg-sky-50 px-3 py-2 text-xs font-medium text-sky-700">Consultation: {doctor.timing}</p>
      </div>
    </article>
  );
}
