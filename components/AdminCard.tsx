import type { ComponentType, FC, SVGProps } from "react";

interface AdminCardProps {
  title: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const AdminCard: FC<AdminCardProps> = ({ title, value, icon: Icon }) => (
  <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-5 shadow-xl">
    <div className="flex items-center gap-3 text-violet-300"><Icon className="h-5 w-5" /></div>
    <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-3 text-4xl font-bold text-white">{value}</p>
  </div>
);

export default AdminCard;
