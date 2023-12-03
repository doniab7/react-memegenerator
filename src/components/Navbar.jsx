import trollface from "../assets/Trollface.png";

export default function Navbar() {
  return (
    <nav className="bg-fuchsia-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={trollface}
                alt="Meme Generator"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <h1
                  href="#"
                  className="bg-fuchsia-900 text-white rounded-md px-3 py-2 text-xl font-medium"
                  aria-current="page"
                >
                  MemeGenerator
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-gray-200">
            <h1>React Project</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
