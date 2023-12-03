export default function Form() {
  return (
    <div className="isolatepx-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-fuchsia-800 sm:text-4xl ">
        Generate a new meme image
      </h2>

      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <input
              type="text"
              name="upper-text"
              id="upper-text"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2.5">
            <input
              type="text"
              name="lower-text"
              id="lower-text"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
          >
            Generate!
          </button>
        </div>
      </form>
    </div>
  );
}
