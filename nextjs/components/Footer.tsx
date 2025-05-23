export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Calvary Baptist Church</h3>
            <p className="text-gray-400">Just ordinary people serving an extraordinary God!</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span>506 Runnels St., Merkel, TX 79536</span>
              </li>
              <li className="flex items-start">
                <span>325.928.5120</span>
              </li>
              <li className="flex items-start">
                <span>officeadmin@cbcmerkel.org</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-default"
                aria-label="Facebook"
              >
                FB
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-default"
                aria-label="Twitter"
              >
                TW
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-default"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Calvary Baptist Church, Merkel TX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}