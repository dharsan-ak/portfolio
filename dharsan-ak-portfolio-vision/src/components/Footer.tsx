
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dharsan A K</h3>
            <p className="text-slate-400 mt-1">Electronics and Communication Engineer</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400">
          <p>&copy; {currentYear} Dharsan A K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
