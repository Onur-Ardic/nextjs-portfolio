export async function getRepos() {
  const res = await fetch('https://api.github.com/users/Onur-Ardic/repos')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getArticles() {
  const res = await fetch('https://nextjs-portfolio-db.vercel.app/Articles')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
