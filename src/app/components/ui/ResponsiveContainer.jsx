export default function ResponsiveContainer({ children }) {
  return (
    <div className="w-full max-w-[100vw] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
      {children}
    </div>
  );
}