export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center py-20 px-[100px] min-h-screen"
    >
      <div className="flex flex-row justify-center items-start gap-[100px] w-full max-w-[900px]">
        <div className="flex flex-col items-start pt-2 shrink-0">
          <h2 className="text-[30px] font-semibold text-[var(--text-primary)]">
            Let's keep in touch
          </h2>
          <p className="text-[15px] text-[var(--text-secondary)] mt-3 max-w-[250px] leading-relaxed">
            Got any questions? Drop me a message and I'll get back to you as soon as possible!
          </p>
        </div>
        <form className="flex flex-col gap-6 w-full max-w-[450px]">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <label className="text-[13px] font-medium text-[var(--text-primary)]">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                className="rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--input-placeholder)] outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
              />
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <label className="text-[13px] font-medium text-[var(--text-primary)]">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                className="rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--input-placeholder)] outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-[var(--text-primary)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--input-placeholder)] outline-none focus:border-[var(--text-primary)] transition-colors duration-200"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-[var(--text-primary)]">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Leave a message..."
              rows={5}
              required
              className="rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--input-placeholder)] outline-none focus:border-[var(--text-primary)] transition-colors duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="self-start rounded-lg bg-[var(--text-primary)] px-8 py-3 text-[14px] font-medium text-[var(--bg-primary)] transition-opacity duration-200 hover:opacity-80"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
