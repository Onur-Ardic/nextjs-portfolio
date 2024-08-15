import ArticleCard from '@/components/Home/Projects_Articles/Articles/ArticlesCard'
import { getArticles } from '@/service/api'

const page = async () => {
  const articles = await getArticles()
  return (
    <section className="article-wrapper mt-32">
      <div className="article-card-wrapper flex flex-wrap justify-center">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </section>
  )
}

export default page
