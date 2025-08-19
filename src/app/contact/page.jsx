export default function ContactForm() {
  return (
    <div className="pt-48">
        <div className="w-[700px] h-[500px]  mx-auto bg-[#212121] bg-gradient-to-br from-[#212121] to-[#212121] border-2 border-transparent p-8 rounded-2xl relative text-white">
      {/* Electric blue gradient border glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-transparent via-[#40c9ff] to-[#40c9ff] blur-lg opacity-50 z-0" />

      <form className="relative z-10 flex  flex-col gap-6 text-sm">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-[#00E5FF] font-semibold text-xs">
            Company Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-lg text-white bg-transparent border border-[#414141]
                       placeholder-gray-400 focus:outline-none focus:border-[#40c9ff]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="textarea" className="text-[#00E5FF] font-semibold text-xs">
            How Can We Help You?
          </label>
          <textarea
            name="textarea"
            id="textarea"
            rows={6}
            required
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-lg text-white bg-transparent border border-[#414141]
                       resize-none placeholder-gray-400 focus:outline-none focus:border-[#40c9ff]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-[40%] bg-[#FF1E1E] text-[#212121] font-semibold px-4 py-2 rounded-md
                     hover:bg-white hover:text-[#212121] transition duration-300 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
