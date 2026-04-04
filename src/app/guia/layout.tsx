export default function GuiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1C1C1E] text-[#F2EDE4] min-h-screen">
      {children}
    </div>
  );
}