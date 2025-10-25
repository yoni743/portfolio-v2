export default function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'Tailwind', 'Vite', 'Git'
  ]
  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map(s => (
          <li
            key={s}
            className="px-3 py-1 rounded-full border text-sm bg-white text-gray-800 border-slate-200 dark:bg-gray-800 dark:text-gray-100 dark:border-slate-700 transition-colors duration-300"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}
