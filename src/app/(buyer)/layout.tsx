import NavBar from "@/src/components/common/Nav";


export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <div className="flex justify-center">
        <NavBar />
      </div>

      {/* Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4">
        {children}
      </main>

    </div>
  );
}