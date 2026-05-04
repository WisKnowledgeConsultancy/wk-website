import React from "react";
import { useParams } from "react-router-dom";

const mockProfiles = [
  {
    name: "Dr. Abdul Fareed Brohi",
    title: "Language & IELTS Trainer",
    bio: "Dr. Brohi has over 25 years of experience in language training, IELTS preparation, and academic mentorship.",
    experience: "25+ Years",
    specialization: ["IELTS", "Academic English", "Communication Skills"],
    image: "/male.jpeg",
  },
];

export default function TrainerProfile() {
  const { id } = useParams();
  const trainer = mockProfiles[id];

  if (!trainer) return <p>Trainer not found</p>;

  return (
    <section style={{ padding: "4rem", maxWidth: "800px", margin: "auto" }}>
      <img
        src={trainer.image}
        alt={trainer.name}
        style={{ width: "200px", borderRadius: "12px" }}
      />
      <h1>{trainer.name}</h1>
      <h3>{trainer.title}</h3>
      <p>{trainer.bio}</p>

      <p>
        <strong>Experience:</strong> {trainer.experience}
      </p>

      <ul>
        {trainer.specialization.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
