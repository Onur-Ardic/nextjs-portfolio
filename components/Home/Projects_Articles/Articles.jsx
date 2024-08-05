import { getArticles } from "@/service/api"


const Articles = async () => {
    const articles = await getArticles()
    console.log(articles);


    return (
        <div>Articles</div>
    )
}

export default Articles