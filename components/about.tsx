export function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-4 animate-fade-in-left">
              <h2 className="text-4xl font-bold gradient-text">About</h2>
              <div className="h-1 w-16 gradient-bg rounded-full" />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-6 rounded-xl hover-lift animate-fade-in-up animate-delay-200">
              <p className="text-lg leading-relaxed text-pretty">
                I'm a proactive and disciplined Software Engineer with expertise in Java programming and related
                frameworks. Currently working as a Backend Engineer at{" "}
                <span className="gradient-text font-semibold">Simplify Synergy</span>, where I optimize database
                performance and build scalable microservices.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-lift animate-fade-in-up animate-delay-400">
              <p className="text-lg leading-relaxed text-pretty">
                My passion lies at the intersection of robust backend architecture and seamless user experiences. I
                specialize in building high-performance APIs, implementing secure authentication systems, and optimizing
                database operations that power modern applications.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl hover-lift animate-fade-in-up animate-delay-700">
              <p className="text-lg leading-relaxed text-pretty">
                With over 4 years of experience across various industries, I've contributed to projects ranging from
                flight booking systems to quiz applications, consistently delivering solutions that improve performance
                and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
