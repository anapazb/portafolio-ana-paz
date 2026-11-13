import { T, LocalizedList } from "@/components/language";
import { BookOpen, CircleDot, Dumbbell } from "lucide-react";
import { hobbies } from "@/data/about";
export function Hobbies() {
  const icons = [CircleDot, Dumbbell, BookOpen];
  return <article className="card hobbies-card">
      <div>
        <span className="eyebrow"><T>{"EN MI TIEMPO LIBRE"}</T></span>
        <h3><T>{hobbies.title}</T></h3>
        <p><T>{hobbies.description}</T></p>
      </div>
      <LocalizedList className="hobbies-activities" aria-label="Mis actividades">
        {hobbies.activities.map((activity, index) => {
        const Icon = icons[index];
        return <li key={activity}><Icon size={24} strokeWidth={1.3} aria-hidden="true" /><span><T>{activity}</T></span></li>;
      })}
      </LocalizedList>
    </article>;
}
