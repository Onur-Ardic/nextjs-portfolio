import { getArticles } from '@/service/api'
import ArticlesSlide from './ArticlesSlide'

const Articles = async () => {
  const articlesData = await getArticles()
  console.log(articlesData)

  return <ArticlesSlide articlesData={articlesData} />
}

export default Articles
