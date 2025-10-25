import projects from '../data/projects'

export default function Projects() {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((p) => (
          <article key={p.title} className="rounded-lg border bg-white overflow-hidden dark:bg-slate-800 dark:border-slate-700">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1 dark:text-slate-300">{p.description}</p>
              <div className="flex gap-3 mt-4">
                {p.demo && (
                  <a className="text-primary" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                )}
                {p.github && (
                  <a className="text-primary" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
